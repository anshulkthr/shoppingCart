import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct, changeProductQuantity } from '../../../../services/cart/actions';
import { updateCart } from '../../../../services/total/actions';
import CartProduct from '../../CartProduct';
import { formatPrice } from '../../../../services/util';
import '../../style.scss';
import GithubCorner from '../../../github/Top';

class Cart extends Component {
  static propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object,
    changeProductQuantity: PropTypes.func,
    productToChange: PropTypes.object,
  };

  state = {
    isOpen: true,
    itemSumWithouDiscount: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }

    if (nextProps.productToChange !== this.props.productToChange) {
      this.changeProductQuantity(nextProps.productToChange);
    }
  }


  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);

      let itemTotalSum = 0;
      cartProducts.map(itemP => {
        itemTotalSum+=((itemP.price/((100 - itemP.discount)/100)).toFixed(0)) * itemP.quantity;
      });

      this.setState({itemSumWithouDiscount: itemTotalSum});
    }
  };

  proceedToCheckout = () => {
    const {
      totalPrice,
      productQuantity,
      currencyFormat,
      currencyId
    } = this.props.cartTotal;

    if (!productQuantity) {
      alert('Add some product in the cart!');
    } else {
      alert(
        `Checkout - Subtotal: Rs ${formatPrice(
          totalPrice,
          currencyId
        )}`
      );
    }
  };

  changeProductQuantity = changedProduct => {
    const { cartTotal, cartProducts, updateCart } = this.props;

    const product = cartProducts.find(p => p.id === changedProduct.id);
    product.quantity = changedProduct.quantity;
    if (product.quantity <= 0) {
      this.removeProduct(product);
    }
    updateCart(cartProducts);

    let itemTotalSum = 0;
    cartProducts.map(itemP => {
      itemTotalSum+=((itemP.price/((100 - itemP.discount)/100)).toFixed(0)) * itemP.quantity;
    });

    this.setState({itemSumWithouDiscount: itemTotalSum});
  }

  render() {
    const { cartTotal, cartProducts, removeProduct, changeProductQuantity } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProduct product={p} removeProduct={removeProduct} changeProductQuantity={changeProductQuantity} key={p.id} />
      );
    });

    let classes = ['float-cart'];
    let itemTotalSum = 0;
    cartProducts.map(itemP => {
      itemTotalSum+=((itemP.price/((100 - itemP.discount)/100)).toFixed(0)) * itemP.quantity;
    });

    let discountPrice = itemTotalSum - cartTotal.totalPrice;
    if (!!this.state.isOpen) {
      classes.push('float-cart--open');
    }
    return (
      <>
      <GithubCorner />
      <div className={classes.join(' ')}>
        <div className="float-cart__content">
          <div className="float-cart__shelf-container">
            {products}
            {!products.length && (
              <p className="shelf-empty">
                Add some products in the cart <br />
                :)
              </p>
            )}  
          </div>

          <div className="float-cart__footer">
            <div className="summary-header">Price Details</div>
            <div className="float-cart__footer-container">
            <div className="item-original-price">
              <div className="item-length summary-after">Items({products.length})</div>
              <div className="item-price">{this.state.itemSumWithouDiscount === 0 ? ( `Rs. ${itemTotalSum}` ) : ( `Rs. ${this.state.itemSumWithouDiscount}` ) }</div>   
            </div>
            <div className="item-original-price">
              <div className="item-length-discount summary-after">Discount</div>
              <div className="item-price">{this.state.itemSumWithouDiscount === 0 ? ( `Rs. ${discountPrice}` ) : ( `Rs. ${this.state.itemSumWithouDiscount - cartTotal.totalPrice}` )}</div>   
            </div>
            </div>
            <div className="order-subtotal">
              <div className="sub summary-after">Order Total</div>
                <div className="sub-price">
                  <p className="sub-price__val">
                    {`Rs ${
                      cartTotal.totalPrice
                    }`}
                  </p>
                  <small className="sub-price__installment">
                    {!!cartTotal.installments && (
                      <span>
                        {`OR UP TO ${cartTotal.installments} x ${
                          cartTotal.currencyFormat
                        } ${formatPrice(
                          cartTotal.totalPrice / cartTotal.installments,
                          cartTotal.currencyId
                        )}`}
                      </span>
                    )}
                  </small>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  productToChange: state.cart.productToChange,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct, changeProductQuantity }
)(Cart);