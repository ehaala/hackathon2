import React, { Component } from 'react';
import './App.css';
import './index.css';

class OrderConfirmation extends Component {
  
  render(){
    return(
      <div className="confirmation">
      <h3>Thank you for your order!</h3>
      <p>Your food will be available for pickup in 19 minutes.</p>
      </div>
    );
  }
}

export default OrderConfirmation;