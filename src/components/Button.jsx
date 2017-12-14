import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleClick, handleKeyDown }) => (
  <button
    tabIndex={0}
    className="btn btn--primary"
    onClick={handleClick}
    onKeyDown={handleKeyDown}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Submit',
};


export default Button;
