import React, { Component } from 'react';
import './App.css';
import './index.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Checkout extends Component {
	
	render() {
		return (
			<Router>
				<div className="cart content col-sm-6">
					<form>
					<h1>Billing Information</h1>
					<input 	type = "text"
									placeholder ="Name on Card"
					/>
					<br />
					<input 	type = "text"
									placeholder ="Street Address"
					/>
					<br />
					<input	type = "text"
									placeholder ="Apt/Unit #"
					/>
					<br />
					<input	type = "text"
									placeholder ="City"
					/>
					<br />
					<input	type = "text"
									placeholder ="State"
					/>
					<br />
					
					<input	type = "text"
									placeholder ="Zip Code"
					/>
					<br />
					<h1>Credit Card Information</h1>
					<input	type = "text"
									placeholder ="Credit Card Number"
					/>
					<br />
					<input	type = "text"
									placeholder ="Experation Date"
					/>
					<br />
					<input	type = "text"
									placeholder ="CCV Number"
					/>
					<br />
					</form>
					<a href='/OrderConfirmation'>
					<input type="submit" value="buy that food, you drunk fool!" />
					</a>
				</div>
			</Router>
		);
	}
}

  

export default Checkout;
