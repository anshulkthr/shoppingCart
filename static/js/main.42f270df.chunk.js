(this.webpackJsonpshoppingCart=this.webpackJsonpshoppingCart||[]).push([[0],{163:function(e,t,a){},173:function(e,t,a){e.exports=a(414)},401:function(e,t,a){},402:function(e,t,a){},403:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){},414:function(e,t,a){"use strict";a.r(t);a(174);var n=a(0),r=a.n(n),c=a(164),o=a.n(c),u=a(37),l=a(38),s=a(40),i=a(39),d=a(41),p=a(14),m=a(166),h=a.n(m),f=function(e,t){switch(t){case"BRL":return e.toFixed(2).replace(".",",");default:return e.toFixed(2)}},v={lowestprice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},highestprice:function(e,t){return e.price>t.price?-1:e.price<t.price?1:0},discount:function(e,t){return e.discount>t.discount?-1:e.discount<t.discount?1:0}},E=(a(401),function(){return r.a.createElement("div",{className:"spinner lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),y=Object(p.b)((function(e){return{sort:e.sort.type}}),{updateSort:function(e){return{type:"UPDATE_SORT",payload:e}}})((function(e){var t=e.updateSort;e.sort;return r.a.createElement("div",{className:"sort"},r.a.createElement("label",null,"Sort By:"),r.a.createElement("ul",{className:"sortFilter"},r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0);",onClick:function(){return t("")}},"Default")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0);",onClick:function(){return t("lowestprice")}},"Lowest to highest")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0);",onClick:function(){return t("highestprice")}},"Highest to lowest")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0);",onClick:function(){return t("discount")}},"Discount"))))})),b=function(e){return r.a.createElement("div",{className:"shelf-container-header"},r.a.createElement("small",{className:"products-found"},r.a.createElement("span",null,e.productsLength," Product(s) found.")),r.a.createElement(y,null))},g=function(e){return r.a.createElement("div",{className:e.classes},r.a.createElement("img",{src:e.src,alt:e.alt,title:e.title}))},O=function(e){return{type:"LOAD_CART",payload:e}},P=function(e){return{type:"REMOVE_PRODUCT",payload:e}},C=function(e){return{type:"CHANGE_PRODUCT_QUANTITY",payload:e}},T=Object(p.b)(null,{addProduct:function(e){return{type:"ADD_PRODUCT",payload:e}}})((function(e){var t=e.product,a=e.addProduct;t.quantity=1;var n=f(t.price,t.currencyId);return r.a.createElement("div",{className:"shelf-item",onClick:function(){return a(t)},"data-sku":t.id},r.a.createElement(g,{classes:"shelf-item__thumb",src:t.img_url,alt:t.name}),r.a.createElement("p",{className:"shelf-item__title"},t.name),r.a.createElement("div",{className:"shelf-item__price"},t.discount>0?r.a.createElement("div",{className:"prodPrice"},r.a.createElement("div",{className:"val discountedPrice"},r.a.createElement("small",null,"Rs"),r.a.createElement("b",null,n.substr(0,n.length-3))),r.a.createElement("div",{className:"val originalPrice"},r.a.createElement("strike",null,r.a.createElement("small",null,"Rs"),r.a.createElement("b",null,(t.price/((100-t.discount)/100)).toFixed(0))),r.a.createElement("span",{className:"percentOff"},t.discount,"% off"))):r.a.createElement("div",{className:"val discountedPrice"},r.a.createElement("small",null,"Rs"),r.a.createElement("b",null,n.substr(0,n.length-3)))),r.a.createElement("div",{className:"shelf-item__buy-btn"},"Add to cart"))})),j=function(e){return e.products.map((function(e){return r.a.createElement(T,{product:e,key:e.id})}))},N=(a(402),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleFetchProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.filters,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sort;a.setState({isLoading:!0}),a.props.fetchProducts(e,t,(function(){a.setState({isLoading:!1})}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleFetchProducts()}},{key:"componentWillReceiveProps",value:function(e){var t=e.filters,a=e.sort,n=this.props.filters;t.length!==n.length&&this.handleFetchProducts(t,void 0),a!==this.props.sort&&this.handleFetchProducts(void 0,a)}},{key:"render",value:function(){var e=this.props.products,t=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(E,null),r.a.createElement("div",{className:"shelf-container"},r.a.createElement(b,{productsLength:e.length}),r.a.createElement(j,{products:e})))}}]),t}(n.Component)),_=Object(p.b)((function(e){return{products:e.shelf.products,filters:e.filters.items,sort:e.sort.type}}),{fetchProducts:function(e,t,a){return function(n){return h.a.get("https://api.myjson.com/bins/qzuzi.json").then((function(r){var c=r.data,o=e[e.length-1];return e&&e.length>0&&(c=c.filter((function(e){return o>=e.price}))),t&&(c=c.sort(v[t])),a&&a(),n({type:"FETCH_PRODUCTS",payload:c})})).catch((function(e){console.log("Could not fetch products. Try again later.")}))}}})(N),R=(a(403),a(167)),k=a.n(R),A=(a(408),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).toggleCheckbox=function(e){a.setState({value:e}),a.selectedCheckboxes.has(e)?a.selectedCheckboxes.delete(e):a.selectedCheckboxes.add(e),a.props.updateFilters(Array.from(a.selectedCheckboxes))},a.state={value:0},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.selectedCheckboxes=new Set}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:"filters"},r.a.createElement("h4",{className:"title"},"Price:"),r.a.createElement("div",{className:"slider"},r.a.createElement(k.a,{min:0,max:1e3,labels:{0:"0",1e3:"1000"},value:e,onChange:this.toggleCheckbox}),r.a.createElement("div",{className:"rangeValueFilter"},e)))}}]),t}(n.Component)),w=Object(p.b)(null,{updateFilters:function(e){return{type:"UPDATE_FILTER",payload:e}}})(A),D=a(168),F=a(169),S=(a(411),function(e){return r.a.createElement("div",{className:"topHeader"},r.a.createElement("a",{href:"/shoppingCart"},r.a.createElement(D.a,{icon:F.a})))}),U=function(e){return function(t){var a=e.reduce((function(e,t){return e+=t.quantity}),0),n=e.reduce((function(e,t){return e+=t.price*t.quantity}),0);t({type:"UPDATE_CART",payload:{productQuantity:a,installments:e.reduce((function(e,t){return e=t.installments>e?t.installments:e}),0),totalPrice:n,currencyId:"USD",currencyFormat:"$"}})}},q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleMouseOver=function(){a.setState({isMouseOver:!0})},a.handleMouseOut=function(){a.setState({isMouseOver:!1})},a.handleOnIncrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity+1,e(t)},a.handleOnDecrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity-1,e(t)},a.state={product:a.props.product,isMouseOver:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.removeProduct,a=this.state.product,n=["shelf-item"];return this.state.isMouseOver&&n.push("shelf-item--mouseover"),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("div",{className:"shelf-item__del",onMouseOver:function(){return e.handleMouseOver()},onMouseOut:function(){return e.handleMouseOut()},onClick:function(){return t(a)}}),r.a.createElement(g,{classes:"shelf-item__thumb",src:a.img_url,alt:a.name}),r.a.createElement("div",{className:"shelf-item__details"},r.a.createElement("p",{className:"title"},a.name),r.a.createElement("p",{className:"desc"},"Quantity: ",a.quantity)),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("p",null,"Rs ".concat(f(a.price,"$"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOnDecrease,disabled:1===a.quantity,className:"change-product-button"},"-"),r.a.createElement("button",{onClick:this.handleOnIncrease,className:"change-product-button"},"+"))))}}]),t}(n.Component),Q=(a(163),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=!1;n.forEach((function(t){t.id===e.id&&(t.quantity+=e.quantity,c=!0)})),c||n.push(e),r(n)},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.findIndex((function(t){return t.id===e.id}));c>=0&&(n.splice(c,1),r(n))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove),e.productToChange!==this.props.productToChange&&this.changeProductQuantity(e.productToChange)}},{key:"render",value:function(){var e=this.props,t=e.cartTotal,a=e.cartProducts,n=e.removeProduct,c=e.changeProductQuantity;a.map((function(e){return r.a.createElement(q,{product:e,removeProduct:n,changeProductQuantity:c,key:e.id})}));return r.a.createElement("div",{className:"float-cart home"},r.a.createElement("a",{href:"/shop-cart"},r.a.createElement("span",{className:"bag bag--float-cart-closed"},r.a.createElement("span",{className:"bag__quantity"},t.productQuantity))))}}]),t}(n.Component)),I=Object(p.b)((function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,productToChange:e.cart.productToChange,cartTotal:e.total.data}}),{loadCart:O,updateCart:U,removeProduct:P,changeProductQuantity:C})(Q),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("main",null,r.a.createElement(w,null),r.a.createElement(_,null)),r.a.createElement(I,null))},M=a(171),L=a(49),H=(a(412),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!0},a.addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=!1;n.forEach((function(t){t.id===e.id&&(t.quantity+=e.quantity,c=!0)})),c||n.push(e),r(n)},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.findIndex((function(t){return t.id===e.id}));c>=0&&(n.splice(c,1),r(n))},a.proceedToCheckout=function(){var e=a.props.cartTotal,t=e.totalPrice,n=e.productQuantity,r=(e.currencyFormat,e.currencyId);n?alert("Checkout - Subtotal: Rs ".concat(f(t,r))):alert("Add some product in the cart!")},a.changeProductQuantity=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.find((function(t){return t.id===e.id}));c.quantity=e.quantity,c.quantity<=0&&a.removeProduct(c),r(n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove),e.productToChange!==this.props.productToChange&&this.changeProductQuantity(e.productToChange)}},{key:"render",value:function(){var e=this,t=this.props,a=t.cartTotal,n=t.cartProducts,c=t.removeProduct,o=t.changeProductQuantity,u=n.map((function(e){return r.a.createElement(q,{product:e,removeProduct:c,changeProductQuantity:o,key:e.id})})),l=["float-cart"];return this.state.isOpen&&l.push("float-cart--open"),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("div",{className:l.join(" ")},r.a.createElement("div",{className:"float-cart__content"},r.a.createElement("div",{className:"float-cart__shelf-container"},u,!u.length&&r.a.createElement("p",{className:"shelf-empty"},"Add some products in the cart ",r.a.createElement("br",null),":)")),r.a.createElement("div",{className:"float-cart__footer"},r.a.createElement("div",{className:"sub"},"SUBTOTAL"),r.a.createElement("div",{className:"sub-price"},r.a.createElement("p",{className:"sub-price__val"},"Rs ".concat(f(a.totalPrice,a.currencyId))),r.a.createElement("small",{className:"sub-price__installment"},!!a.installments&&r.a.createElement("span",null,"OR UP TO ".concat(a.installments," x ").concat(a.currencyFormat," ").concat(f(a.totalPrice/a.installments,a.currencyId))))),r.a.createElement("div",{onClick:function(){return e.proceedToCheckout()},className:"buy-btn"},"Checkout")))))}}]),t}(n.Component)),B=Object(p.b)((function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,productToChange:e.cart.productToChange,cartTotal:e.total.data}}),{loadCart:O,updateCart:U,removeProduct:P,changeProductQuantity:C})(H),J=a(48),V=a(170),W=a(20),$={products:[]},z={products:[]},G={data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"USD",currencyFormat:"$"}},Y={items:[]},K={type:""},X=Object(J.c)({shelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(W.a)({},e,{products:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CART":return Object(W.a)({},e,{products:t.payload});case"ADD_PRODUCT":return Object(W.a)({},e,{productToAdd:Object.assign({},t.payload)});case"REMOVE_PRODUCT":return Object(W.a)({},e,{productToRemove:Object.assign({},t.payload)});case"CHANGE_PRODUCT_QUANTITY":return Object(W.a)({},e,{productToChange:Object.assign({},t.payload)});default:return e}},total:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CART":return Object(W.a)({},e,{data:t.payload});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return Object(W.a)({},e,{items:t.payload});default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SORT":return Object(W.a)({},e,{type:t.payload});default:return e}}});o.a.render(r.a.createElement(p.a,{store:function(e){e=JSON.parse(window.localStorage.getItem("state"))||e;var t=[V.a],a=Object(J.e)(X,e,Object(J.d)(J.a.apply(void 0,t)));return a.subscribe((function(){var e=a.getState(),t={cart:e.cart,total:e.total};window.localStorage.setItem("state",JSON.stringify(t))})),a}()},r.a.createElement(M.a,null,r.a.createElement(L.a,{exact:!0,path:"/shoppingCart",component:x}),r.a.createElement(L.a,{path:"/shop-cart",component:B}))),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.42f270df.chunk.js.map