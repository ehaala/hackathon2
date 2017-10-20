import React, { Component } from 'react';
import './App.css';
import FoodItems from './FoodItems';
import Cart from './Cart';
import Checkout from './Checkout';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foodItems: ["pizza", "burger"],
			cart: []
		}

		this.handleMove = this.handleMove.bind(this);
	}

	handleMove(id) {
		var temp = this.state.cart;
		var item = this.state.foodItems[id];
		temp.push(item);
		this.setState({cart: temp});
		var temp2 = this.state.foodItems;
		temp2.splice(id, 1);
		this.setState({foodItems: temp2})
	}

  render() {
    return (
      <div className="App">
        <FoodItems list={this.state.foodItems} handleMove={this.handleMove} />
        <Cart list={this.state.cart} />
      </div>
    );
  }
}

export default Homepage;
