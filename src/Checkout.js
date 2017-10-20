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
			<div>
				<div className="content col-sm-8">
					<form>
					<h3>Billing Information</h3>
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
					<h3>Credit Card Information</h3>
					<input	type = "text"
									placeholder ="Credit Card Number"
					/>
					<br />
					<input	type = "text"
									placeholder ="Expiration Date"
					/>
					<br />
					<input	type = "text"
									placeholder ="CCV Number"
					/>
					<br />
					</form>
					<a href='/OrderConfirmation'>
					<button type="submit" className="checkout btn-secondary">Place Order</button>

					</a>
				</div>
				<div className="cart col-sm-4">
					<h3>Basket</h3>
								<div className="cartItems col-sm-12">
				<p>Loaded Potato Skins ($7.99)</p>
				<hr />
				<div className="bill">
					<p>Subtotal $7.99</p>
					<p>Tax $1</p>
					<h4>TOTAL $8.99</h4>
				</div>		
			</div>
				</div>
				</div>
			</Router>
		);
	}
}

  

export default Checkout;
