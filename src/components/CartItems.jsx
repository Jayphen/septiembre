import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import products from '../data/products';

const getItem = id => products.find(product => product.id === id);

const CartItems = ({ items, handleDelete }) => (
  <div>
    {items.map(item => (
      <CartItem key={item.id} handleDelete={handleDelete} size={item.size} qty={item.qty} item={getItem(item.id)} />
      ))}
  </div>
);

export default CartItems;
