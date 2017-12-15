import React from 'react';
import PropTypes from 'prop-types';
import getAmountSaved from '../helpers/getAmountSaved';

const CartDiscount = ({ products, itemsInCart, percent }) => (
  <div className="cart-discount">
    <div className="cart-discount--detail">
      <header>{percent}% discount on your order!</header>
      <p>As a first time shopper you get a discount on your first order.</p>
    </div>
    <div className="cart-discount--subtotal">
      -€{getAmountSaved(products, itemsInCart, percent)}
    </div>
  </div>
);

CartDiscount.propTypes = {
  percent: PropTypes.number,
  itemsInCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

CartDiscount.defaultProps = {
  percent: 0,
};

export default CartDiscount;
