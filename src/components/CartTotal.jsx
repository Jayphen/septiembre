import React from 'react';
import PropTypes from 'prop-types';

const getItem = (products, id) => products.find(product => product.id === id);

const getTotal = (products, items, discount) => {
  const beforeDiscount = items.reduce((total, item) => {
    const { id, qty } = item;
    const current = getItem(products, id);
    const linePrice = qty * current.price;

    return total + linePrice;
  }, 0);
  return beforeDiscount - beforeDiscount * discount / 100;
};

const cartTotal = ({ itemsInCart, products, discount }) => (
  <div className="cart-total">
    <small>Subtotal</small>
    <span className="cart-total--price">€{getTotal(products, itemsInCart, discount)}</span>
  </div>
);

export default cartTotal;
