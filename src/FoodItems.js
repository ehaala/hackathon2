import React, { Component } from 'react';
import './App.css';
import './index.css';

class FoodItems extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.item.name,
			img: props.item.img,
			price: props.item.price,
			key: props.id
		}

		this.clickMove = this.clickMove.bind(this);
	}

	clickMove(e) {
		e.preventDefault();
		var id = e.target.getAttribute('data-id');
		this.props.handleMove(id);
	}

	render() {
		return (
			<div className="items content col-sm-12">
				<img src={this.state.img} height="400px"/>
				<h3>{this.state.name} (${this.state.price}) 
				<button type="button" className="" onClick={this.clickMove} data-id={this.state.key}></button>
				</h3>
			</div>
		)
	}
}

export default FoodItems;