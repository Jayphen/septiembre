import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text, type, handleClick, handleKeyDown,
}) => (
  <button
    tabIndex={0}
    className={`btn btn--${type}`}
    onClick={handleClick}
    onKeyDown={handleKeyDown}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  handleKeyDown: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  text: 'Submit',
  handleClick: () => {},
  handleKeyDown: () => {},
  type: 'primary',
};

export default Button;
