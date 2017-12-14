import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getSize = (size, arr) => arr.find(item => item.short === size);

const CartItem = (props) => {
  const item = { ...props.item };

  return (
    <div className="cart-item">
      <img className="cart-item--image" src={item.image} alt={item.name} />
      <div className="cart-item--details">
        <h2 className="cart-item--title">{item.name}</h2>
        <div className="cart-item--options">
          <span>
            <strong>Size:</strong> {getSize(props.size, item.sizes).long}
          </span>
          <span>
            <strong>Quantity:</strong> {props.qty}
          </span>
        </div>
        <div className="cart-item--actions">
          <button
            className="btn btn--secondary"
            onClick={() => alert('Not implemented...:( Try delete instead!')}
          >
            <span className="btn--secondary-underline">Change</span>
          </button>
          <button
            onClick={() => props.handleDelete(item.id)}
            className="btn btn--secondary"
          >
            <span className="btn--secondary-underline">Delete</span>
          </button>
        </div>
      </div>
      <div className="cart-item--price">€{props.qty * item.price}</div>
    </div>
  );
};

export default CartItem;
