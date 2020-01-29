import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';

class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired,
    changeProductQuantity: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      isMouseOver: false
    };
  }

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  handleOnIncrease = () => {
    const { changeProductQuantity } = this.props;
    const { product } = this.state;
    product.quantity = product.quantity + 1;
    changeProductQuantity(product);
  }

  handleOnDecrease = () => {
    const { changeProductQuantity } = this.props;
    const { product } = this.state;
    product.quantity = product.quantity - 1;
    changeProductQuantity(product);
  }

  render() {
    const { removeProduct } = this.props;
    const { product } = this.state;

    const classes = ['shelf-item'];

    if (!!this.state.isMouseOver) {
      classes.push('shelf-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        >Remove</div>
        <Thumb
          classes="shelf-item__thumb"
          src={product.img_url}
          alt={product.name}
        />
        <div className="shelf-item__details">
          <p className="title">{product.name}</p>
          {product.discount > 0 ? (
            <div className="prodPrice cart">
              <div className="val discountedPrice">
                <small>Rs.</small>
                <b>{(product.price).toFixed(0)}</b>
              </div>
              <div className="val originalPrice">
                <strike>
                  {(product.price/((100 - product.discount)/100)).toFixed(0)}
                </strike>
                <span className="percentOff">{product.discount}% off</span>
              </div>
            </div>
            ) : (
            <div className="val discountedPrice">
              <small>Rs.</small>
              <b>{(product.price).toFixed(0)}</b>
            </div>
            )
            }
        </div>
        <div className="shelf-item__price">
          <div>
            <button onClick={this.handleOnDecrease} disabled={product.quantity === 1 ? true : false} className="change-product-button">-</button>
            <span className="desc">{product.quantity}</span>
            <button onClick={this.handleOnIncrease} className="change-product-button">+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartProduct;
