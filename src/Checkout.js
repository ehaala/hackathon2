import React, { Component } from 'react';
import './App.css';
import './index.css';

class Checkout extends Component {
	constructor(props){
		super(props);
	// 	state = {
  //   redirectToNewPage: false
	// }
	
	}
	render() {
		return (
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
								placeholder ="Zip Code"
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
				<input type="submit" value="buy that food, you drunk fool!" />
				
				</form>

			</div>
		);
	}
}

  

export default Checkout;
