import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const getItem = (products, id) => products.find(product => product.id === id);

const CartItems = ({
  products, items, handleDelete, handleChange,
}) => (
  <div>
    {items.map(item => (
      <CartItem
        key={item.id}
        handleDelete={handleDelete}
        handleChange={handleChange}
        size={item.size}
        qty={item.qty}
        item={getItem(products, item.id)}
      />
    ))}
  </div>
);

export default CartItems;
