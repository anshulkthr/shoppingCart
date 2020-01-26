import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { HashRouter, Route } from "react-router-dom";
import './index.scss';
import { Provider } from 'react-redux';
import Cart from './components/FloatCart/CartProduct/Cart';
import store from './services/store';

ReactDOM.render(
	<Provider store={store()}>
	  <HashRouter>
	  	<Route exact path="/" component={App} />
	    <Route path="/cart" component={Cart} />
	  </HashRouter>
	</Provider>,
  document.getElementById('root')
);
