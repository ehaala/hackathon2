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
			</div>
		)
	}
}

export default Cart;