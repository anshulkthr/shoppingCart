(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){e.exports=a(403)},388:function(e,t,a){},390:function(e,t,a){},392:function(e,t,a){},396:function(e,t,a){},398:function(e,t,a){},400:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);a(161);var n=a(1),r=a.n(n),c=a(153),o=a.n(c),l=a(32),s=a(33),u=a(35),i=a(34),d=a(36),p=a(22),m=a(156),h=a.n(m),f=function(e,t){switch(t){case"BRL":return e.toFixed(2).replace(".",",");default:return e.toFixed(2)}},v={lowestprice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},highestprice:function(e,t){return e.price>t.price?-1:e.price<t.price?1:0}},b=(a(388),function(){return r.a.createElement("div",{className:"spinner lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),y=function(e){return r.a.createElement("div",{className:"shelf-container-header"},r.a.createElement("small",{className:"products-found"},r.a.createElement("span",null,e.productsLength," Product(s) found.")))},E=function(e){return r.a.createElement("div",{className:e.classes},r.a.createElement("img",{src:e.src,alt:e.alt,title:e.title}))},g=Object(p.b)(null,{addProduct:function(e){return{type:"ADD_PRODUCT",payload:e}}})(function(e){var t=e.product,a=e.addProduct;t.quantity=1;var n=f(t.price,t.currencyId);return r.a.createElement("div",{className:"shelf-item",onClick:function(){return a(t)},"data-sku":t.id},r.a.createElement(E,{classes:"shelf-item__thumb",src:t.img_url,alt:t.name}),r.a.createElement("p",{className:"shelf-item__title"},t.name),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("div",{className:"val"},r.a.createElement("small",null,"Rs"),r.a.createElement("b",null,n.substr(0,n.length-3)),r.a.createElement("span",null,n.substr(n.length-3,3)))),r.a.createElement("div",{className:"shelf-item__buy-btn"},"Add to cart"))}),O=function(e){return e.products.map(function(e){return r.a.createElement(g,{product:e,key:e.id})})},C=(a(390),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleFetchProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.filters,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sort;a.setState({isLoading:!0}),a.props.fetchProducts(e,t,function(){a.setState({isLoading:!1})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleFetchProducts()}},{key:"componentWillReceiveProps",value:function(e){var t=e.filters,a=e.sort,n=this.props.filters;t.length!==n.length&&this.handleFetchProducts(t,void 0),a!==this.props.sort&&this.handleFetchProducts(void 0,a)}},{key:"render",value:function(){var e=this.props.products,t=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(b,null),r.a.createElement("div",{className:"shelf-container"},r.a.createElement(y,{productsLength:e.length}),r.a.createElement(O,{products:e})))}}]),t}(n.Component)),P=Object(p.b)(function(e){return{products:e.shelf.products,filters:e.filters.items,sort:e.sort.type}},{fetchProducts:function(e,t,a){return function(n){return h.a.get("https://api.myjson.com/bins/qzuzi.json").then(function(r){var c=r.data;return console.log("fetch"+e.length),e&&e.length>0&&(console.log("fetch123"),c=c.filter(function(t){return e.find(function(e){return e>=t.price})})),t&&(c=c.sort(v[t])),a&&a(),n({type:"FETCH_PRODUCTS",payload:c})}).catch(function(e){console.log("Could not fetch products. Try again later.")})}}})(C),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isChecked:!1},a.toggleCheckboxChange=function(){var e=a.props,t=e.handleCheckboxChange,n=e.label;a.setState(function(e){return{isChecked:!e.isChecked}}),t(n)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.classes,n=this.state.isChecked;return r.a.createElement("div",{className:a},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:t,checked:n,onChange:this.toggleCheckboxChange}),r.a.createElement("span",{className:"checkmark"},t)))}}]),t}(n.Component),k=(a(392),[100,200,300,400,500,600,700,800]),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).toggleCheckbox=function(e){a.selectedCheckboxes.has(e)?a.selectedCheckboxes.delete(e):a.selectedCheckboxes.add(e),console.log(a.selectedCheckboxes),a.props.updateFilters(Array.from(a.selectedCheckboxes))},a.createCheckbox=function(e){return r.a.createElement(_,{classes:"filters-available-size",label:e,handleCheckboxChange:a.toggleCheckbox,key:e})},a.createCheckboxes=function(){return k.map(a.createCheckbox)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.selectedCheckboxes=new Set}},{key:"render",value:function(){return r.a.createElement("div",{className:"filters"},r.a.createElement("h4",{className:"title"},"Price:"),this.createCheckboxes())}}]),t}(n.Component),j=Object(p.b)(null,{updateFilters:function(e){return{type:"UPDATE_FILTER",payload:e}}})(T),N=a(157),R=a(158),w=(a(396),function(e){var t=e.options,a=e.classes,n=e.handleOnChange;return r.a.createElement("select",{onChange:function(e){return n(e.target.value)},className:a},function(e){return e.map(function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.label)})}(t))}),A=[{value:"",label:"Select"},{value:"lowestprice",label:"Lowest to highest"},{value:"highestprice",label:"Highest to lowest"}],D=Object(p.b)(function(e){return{sort:e.sort.type}},{updateSort:function(e){return{type:"UPDATE_SORT",payload:e}}})(function(e){var t=e.updateSort;e.sort;return r.a.createElement("div",{className:"sort"},r.a.createElement("label",null,"Sort By"),r.a.createElement(w,{options:A,handleOnChange:function(e){return t(e)}}))}),S=function(e){return r.a.createElement("div",{className:"topHeader"},r.a.createElement("a",{href:"/"},r.a.createElement(N.a,{icon:R.a})),r.a.createElement(D,null))},F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleMouseOver=function(){a.setState({isMouseOver:!0})},a.handleMouseOut=function(){a.setState({isMouseOver:!1})},a.handleOnIncrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity+1,e(t)},a.handleOnDecrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity-1,e(t)},a.state={product:a.props.product,isMouseOver:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.removeProduct,a=this.state.product,n=["shelf-item"];return this.state.isMouseOver&&n.push("shelf-item--mouseover"),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("div",{className:"shelf-item__del",onMouseOver:function(){return e.handleMouseOver()},onMouseOut:function(){return e.handleMouseOut()},onClick:function(){return t(a)}}),r.a.createElement(E,{classes:"shelf-item__thumb",src:a.img_url,alt:a.name}),r.a.createElement("div",{className:"shelf-item__details"},r.a.createElement("p",{className:"title"},a.name),r.a.createElement("p",{className:"desc"},"Quantity: ",a.quantity)),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("p",null,"Rs ".concat(f(a.price,"$"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOnDecrease,disabled:1===a.quantity,className:"change-product-button"},"-"),r.a.createElement("button",{onClick:this.handleOnIncrease,className:"change-product-button"},"+"))))}}]),t}(n.Component),x=(a(398),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1})},a.addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=!1;n.forEach(function(t){t.id===e.id&&(t.quantity+=e.quantity,c=!0)}),c||n.push(e),r(n),a.openFloatCart()},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.findIndex(function(t){return t.id===e.id});c>=0&&(n.splice(c,1),r(n))},a.proceedToCheckout=function(){var e=a.props.cartTotal,t=e.totalPrice,n=e.productQuantity,r=e.currencyFormat,c=e.currencyId;n?alert("Checkout - Subtotal: ".concat(r," ").concat(f(t,c))):alert("Add some product in the cart!")},a.changeProductQuantity=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.find(function(t){return t.id===e.id});c.quantity=e.quantity,c.quantity<=0&&a.removeProduct(c),r(n)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove),e.productToChange!==this.props.productToChange&&this.changeProductQuantity(e.productToChange)}},{key:"render",value:function(){var e=this,t=this.props,a=t.cartTotal,n=t.cartProducts,c=t.removeProduct,o=t.changeProductQuantity,l=n.map(function(e){return r.a.createElement(F,{product:e,removeProduct:c,changeProductQuantity:o,key:e.id})}),s=["float-cart"];return this.state.isOpen&&s.push("float-cart--open"),r.a.createElement("div",{className:s.join(" ")},this.state.isOpen&&r.a.createElement("div",{onClick:function(){return e.closeFloatCart()},className:"float-cart__close-btn"},"X"),!this.state.isOpen&&r.a.createElement("span",{onClick:function(){return e.openFloatCart()},className:"bag bag--float-cart-closed"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("div",{className:"float-cart__content"},r.a.createElement("div",{className:"float-cart__header"},r.a.createElement("span",{className:"bag"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("span",{className:"header-title"},"Cart")),r.a.createElement("div",{className:"float-cart__shelf-container"},l,!l.length&&r.a.createElement("p",{className:"shelf-empty"},"Add some products in the cart ",r.a.createElement("br",null),":)")),r.a.createElement("div",{className:"float-cart__footer"},r.a.createElement("div",{className:"sub"},"SUBTOTAL"),r.a.createElement("div",{className:"sub-price"},r.a.createElement("p",{className:"sub-price__val"},"Rs ".concat(f(a.totalPrice,a.currencyId))),r.a.createElement("small",{className:"sub-price__installment"},!!a.installments&&r.a.createElement("span",null,"OR UP TO ".concat(a.installments," x ").concat(a.currencyFormat," ").concat(f(a.totalPrice/a.installments,a.currencyId))))),r.a.createElement("div",{onClick:function(){return e.proceedToCheckout()},className:"buy-btn"},"Checkout"))))}}]),t}(n.Component)),U=Object(p.b)(function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,productToChange:e.cart.productToChange,cartTotal:e.total.data}},{loadCart:function(e){return{type:"LOAD_CART",payload:e}},updateCart:function(e){return function(t){var a=e.reduce(function(e,t){return e+=t.quantity},0),n=e.reduce(function(e,t){return e+=t.price*t.quantity},0);t({type:"UPDATE_CART",payload:{productQuantity:a,installments:e.reduce(function(e,t){return e=t.installments>e?t.installments:e},0),totalPrice:n,currencyId:"USD",currencyFormat:"$"}})}},removeProduct:function(e){return{type:"REMOVE_PRODUCT",payload:e}},changeProductQuantity:function(e){return{type:"CHANGE_PRODUCT_QUANTITY",payload:e}}})(x),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("main",null,r.a.createElement(j,null),r.a.createElement(P,null),r.a.createElement(U,null)))},I=a(42),Q=a(159),M=a(16),L={products:[]},H={products:[]},B={data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"USD",currencyFormat:"$"}},J={items:[]},z={type:""},$=Object(I.c)({shelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(M.a)({},e,{products:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CART":return Object(M.a)({},e,{products:t.payload});case"ADD_PRODUCT":return Object(M.a)({},e,{productToAdd:Object.assign({},t.payload)});case"REMOVE_PRODUCT":return Object(M.a)({},e,{productToRemove:Object.assign({},t.payload)});case"CHANGE_PRODUCT_QUANTITY":return Object(M.a)({},e,{productToChange:Object.assign({},t.payload)});default:return e}},total:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CART":return Object(M.a)({},e,{data:t.payload});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return Object(M.a)({},e,{items:t.payload});default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SORT":return Object(M.a)({},e,{type:t.payload});default:return e}}}),G=function(e){e=JSON.parse(window.localStorage.getItem("state"))||e;var t=[Q.a],a=Object(I.e)($,e,Object(I.d)(I.a.apply(void 0,t)));return a.subscribe(function(){var e=a.getState(),t={cart:e.cart,total:e.total};window.localStorage.setItem("state",JSON.stringify(t))}),a},V=function(e){var t=e.children,a=e.initialState,n=void 0===a?{}:a;return r.a.createElement(p.a,{store:G(n)},t)};a(400);o.a.render(r.a.createElement(V,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[160,2,1]]]);
//# sourceMappingURL=main.5e156647.chunk.js.map