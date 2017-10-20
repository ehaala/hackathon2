import React, { Component } from 'react';
import './App.css';
import './index.css';

class FoodItems extends Component {
	constructor(props) {
		super(props);

		this.clickMove = this.clickMove.bind(this);
	}

	clickMove(e) {
		e.preventDefault();
		var id = e.target.getAttribute('data-id');
		this.props.handleMove(id);
	}

	render() {
		return (
			<div className="items content col-sm-6">
				<h1>Options</h1>
				{
					this.props.list.map((item, index) => {
						return (
							<div>
								<li>{item} <button type="button" className="btn-primary" key={index} data-id={index} onClick={this.clickMove}>Add To Cart</button></li>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default FoodItems;