import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './components/ShoppingCart';

const rootElement = document.querySelector('.add-to-bag');

ReactDOM.render(
  <ShoppingCart />,
  rootElement,
);

if (module.hot) {
  module.hot.accept();
}
