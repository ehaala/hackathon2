import React, { Component } from 'react';
import './App.css';
import './index.css';

class Cart extends Component {

	render() {
		return (
			<div className="cart content col-sm-6">
				<h1>Shopping Cart</h1>
				{
					this.props.list.map((item, index) => {
						return (
							<div>
								<li>{item}</li>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Cart;