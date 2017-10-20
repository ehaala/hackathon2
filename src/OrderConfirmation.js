import React, { Component } from 'react';
import './App.css';
import './index.css';

class OrderConfirmation extends Component {
  
  render(){
    return(
      <div className="confirmation">
      <h1>Thank you for your order!</h1>
      <h3>Your food will be available for pickup in 19 minutes.</h3>
      <img className="conPic" src="https://dam.tgifridays.com/content/dam/images/eat/1011.jpg" height="350px"/>
      </div>
    );
  }
}

export default OrderConfirmation;