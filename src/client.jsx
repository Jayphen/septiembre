import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './css/colors.css';
import Button from './components/Button';

const rootElement = document.querySelector('.add-to-bag');

ReactDOM.render(
  <Button text="Add to bag" />,
  rootElement,
);

if (module.hot) {
  module.hot.accept();
}
