import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage';
import FoodItems from './FoodItems';
import Cart from './Cart';
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';
import SideNav from './SideNav';
import grabgrub from './grabgrub.png';
import Sidebar from './sidebar';

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
	        	<Link className="tab" to="/"><img className="logo" src={grabgrub} alt="logo" height="50px"/></Link>{' '}
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
