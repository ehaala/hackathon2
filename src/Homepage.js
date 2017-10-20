import React, { Component } from 'react';
import './App.css';
import FoodItems from './FoodItems';
import Cart from './Cart';
import Checkout from './Checkout';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foodItems: [{
        name: "Bucket of Bones",
        img: "https://dam.tgifridays.com/content/dam/images/eat/1152.jpg",
        price: 12.09
    }
		],
			cart: []
		}

		this.handleMove = this.handleMove.bind(this);
	}

	handleMove(id) {
		var temp = this.state.cart;
		var item = this.state.foodItems[id];
		temp.push(item);
		console.log(temp);
		this.setState({cart: temp});
		// var temp2 = this.state.foodItems;
		// temp2.splice(id, 1);
		// console.log(temp2)
		// this.setState({foodItems: temp2})

	}

  render() {
  	let items = this.state.foodItems.map((item, index) => (
  			<FoodItems item={item} key={index} id={index} handleMove={this.handleMove}/>
  		))
  	let cart = this.state.cart.map((item, index) => (
  			<Cart item={item} key={index} id={index} />
  		))

    return (
    	<div className="App">
	      <div className="col-sm-8">
	      	{items}
	      </div>
	      <div className="cart col-sm-4">
	      	<h3>Basket</h3>
	      	{cart}
	      </div>
      </div>
    );
  }
}

export default Homepage;
