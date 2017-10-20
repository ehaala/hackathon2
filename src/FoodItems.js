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
		this.change = this.change.bind(this);
		this.swipe = this.swipe.bind(this);
	}

	change() {
		this.setState({
			name: "Loaded Potato Skins",
			img: "https://dam.tgifridays.com/content/dam/images/eat/1011.jpg",
			price: 7.99,
			info: "8 crispy potato halves, melted cheddar and bacon. Served with ranch sour cream and green onions."
		})
	}

	swipe() {
		this.setState({
			name: "Giant Onion Rings",
			img: "https://dam.tgifridays.com/content/dam/images/eat/1154.jpg",
			price: 11.44,
			info: "Battered and served with BBQ ranch."
		})
	}

	clickMove(e) {
		e.preventDefault();
		var id = e.target.getAttribute('data-id');
		this.props.handleMove(id);
	}

	render() {
		return (
			<div>
			<div className="filter">
				<select>
	            <option value="">Appetizers</option>
	            <option value="">Main</option>
	            <option value="">Desserts</option>
	            </select>
			</div>
			<div className="items content col-sm-12">
				<img src={this.state.img} height="400px" onClick={this.swipe}/>
				<h3>{this.state.name} <span className="price">${this.state.price}</span> 
				<img className="icon" src="http://www.pngall.com/wp-content/uploads/2016/04/Red-Cross-Mark-Download-PNG.png" height="28px" onClick={this.change}/>
				<img className="cartIcon" src="https://image.flaticon.com/icons/png/512/2/2772.png" onClick={this.clickMove} data-id={this.state.key} height="28px" />
				</h3>
				<p className="info">{this.state.info}</p>
			</div>
			</div>
		)
	}
}

export default FoodItems;