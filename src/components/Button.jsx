import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleClick, handleKeyDown }) => (
  <button tabIndex={0} className="btn btn--primary" onClick={handleClick} onKeyDown={handleKeyDown}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  handleKeyDown: PropTypes.func,
};

Button.defaultProps = {
  text: 'Submit',
  handleClick: () => {},
  handleKeyDown: () => {},
};

export default Button;
