import React from 'react';
import PropTypes from 'prop-types';
import getTotal from '../helpers/getTotal';

const cartTotal = ({ itemsInCart, products, discount }) => (
  <div className="cart-total">
    <small>Subtotal</small>
    <span className="cart-total--price">€{getTotal(products, itemsInCart, discount)}</span>
  </div>
);

cartTotal.propTypes = {
  itemsInCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  discount: PropTypes.number,
};

cartTotal.defaultProps = {
  discount: 0,
};

export default cartTotal;
