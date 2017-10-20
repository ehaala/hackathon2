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
			info: props.item.info,
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
				<h3>{this.state.name} <span className="price">${this.state.price}</span> 
				<img className="icon" src="http://www.pngall.com/wp-content/uploads/2016/04/Red-Cross-Mark-Download-PNG.png" height="28px" />
				<img className="cartIcon" src="https://image.flaticon.com/icons/png/512/2/2772.png" onClick={this.clickMove} data-id={this.state.key} height="28px" />
				</h3>
				<p className="info">{this.state.info}</p>
			</div>
		)
	}
}

export default FoodItems;