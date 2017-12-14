import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, handleClick }) => (
  <div className="btn btn--primary" onClick={handleClick}>
    {text}
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Submit',
};


export default Button;
