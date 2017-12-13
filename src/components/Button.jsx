import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

const Button = ({ text }) => (
  <div className={styles.button}>
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'Submit',
};


export default Button;
