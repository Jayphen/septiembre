import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import products from '../data/products';

const getItem = id => products.find(product => product.id === id);

const CartItems = ({ items, handleDelete }) => (
  <div>
    {items.length > 0 && items.map(item => (
      <CartItem key={item.id} handleDelete={handleDelete} size={item.size} qty={item.qty} item={getItem(item.id)} />
      ))}
    {items.length === 0 && (
      <div className="empty-cart">Cart is empty</div>
    )}
  </div>
);

export default CartItems;
