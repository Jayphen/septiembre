import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const getItem = (products, id) => products.find(product => product.id === id);

const CartItems = ({
  products, items, handleDelete, handleChange,
}) => (
  <ReactCSSTransitionGroup
    transitionName="cart-item"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}
  >
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
  </ReactCSSTransitionGroup>
);

export default CartItems;
