import React, { Component } from 'react';
import './App.css';
import './index.css';

class Cart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: props.item.name,
			img: props.item.img,
			price: props.item.price,
			key: props.id
		}
	}

	render() {
		return (
			<div className="cartItems col-sm-12">
				<p>{this.state.name} (${this.state.price})</p>
				<hr />
				<div className="bill">
					<p>Subtotal ${this.state.price}</p>
					<p>Tax ${Math.floor(this.state.price * .1)}</p>
					<h4>TOTAL ${this.state.price + Math.floor(this.state.price * .1)}</h4>
				</div>
					<button type="button" className="checkout btn-secondary">CHECKOUT</button>
			</div>
		)
	}
}

export default Cart;