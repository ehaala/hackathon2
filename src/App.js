import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import FoodItems from './FoodItems';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
	        <nav >
	        	<Link className="tab" to="/">Home</Link>{' '}
	        	<Link className="tab" to="/Checkout">Checkout</Link>
            <Link className="tab" to="/OrderConfirmation">Order Confirmation</Link>
	        </nav>  
	        <Route exact path="/" component={Homepage} />
	        <Route path="/Checkout" component={Checkout} />
          <Route path="/OrderConfirmation" component={OrderConfirmation} />
        </div>
      </Router>
     
    );
  }
}

export default App;
