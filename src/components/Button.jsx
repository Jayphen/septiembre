import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <div className="btn btn--primary">
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
