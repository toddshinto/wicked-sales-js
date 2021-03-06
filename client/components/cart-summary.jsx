import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  render() {
    const cartItems = this.props.cartItems;
    let prices;
    let total;
    let disabled = false;
    if (cartItems.length > 0) {
      prices = cartItems.reduce((x, y) => (x + Number(y.price)), 0);
      total = Number((prices / 100).toFixed(2)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } else {
      total = 'N/A';
      disabled = true;
    }
    return (
      <>
        <div className="row back-row">
          <button className="btn btn-link back" onClick={() => this.props.setView('catalog', {})}>{'<'} Back to catalog</button>
        </div>
        <h1>Your Cart</h1>
        {cartItems.map(item =>
          <CartSummaryItem key={cartItems.indexOf(item)} item={item}/>)}
        <div className="d-flex flex-row justify-content-between pl-4 pr-4 mt-3">
          <h3>Total: {total} </h3>
          <button
            type="button"
            className={'btn btn-dark text-white mb-5 cust-btn'}
            onClick={() => this.props.setView('checkout', {})}
            disabled={disabled}>
              Checkout
          </button>
        </div>
      </>
    );
  }
}
