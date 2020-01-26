import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.scss';
import { Provider } from 'react-redux';
import Cart from './components/FloatCart/CartProduct/Cart';
import store from './services/store';

ReactDOM.render(
	<Provider store={store()}>
	  <Router>
	  	<Route exact path="/shoppingCart">
	    	<App />
	    </Route>
	    <Route path="/cart">
	    	<Cart />
	    </Route>
	  </Router>
	</Provider>,
  document.getElementById('root')
);
