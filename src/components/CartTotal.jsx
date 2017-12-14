import React from 'react';
import PropTypes from 'prop-types';
import products from '../data/products';

const getItem = id => products.find(product => product.id === id);

const getTotal = items => items.reduce((total, item) => {
  const { id, qty } = item;
  const current = getItem(id);
  const linePrice = qty * current.price;

  return total + linePrice;
}, 0);

const cartTotal = ({ items }) => (
  <div className="cart-total">
    <small>Subtotal</small>
    <span className="cart-total--price">€{getTotal(items)}</span>
  </div>
);

export default cartTotal;
