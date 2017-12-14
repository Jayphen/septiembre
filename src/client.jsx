import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

const rootElement = document.querySelector('.add-to-bag');

ReactDOM.render(
  <Button text="Add to shopping bag" />,
  rootElement,
);

if (module.hot) {
  module.hot.accept();
}
