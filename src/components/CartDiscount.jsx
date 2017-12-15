import React from 'react';
import PropTypes from 'prop-types';

const CartDiscount = ({ percent }) => (
  <div className="cart-discount">
    <div className="cart-discount-detail">
      <header>{percent}% discount on your order!</header>
      <p>As a first time shopper you get a discount on your first order.</p>
    </div>
    <div className="cart-discount-subtotal">num</div>
  </div>
);

CartDiscount.propTypes = {};

export default CartDiscount;
