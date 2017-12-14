import React from 'react';
import PropTypes from 'prop-types';

const ModalClose = ({ handleClick, fill }) => (
  <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill={fill} d="M.55 23.46c.33.33.75.5 1.17.5.42 0 .84-.17 1.18-.5l9.1-9.07 9.1 9.1c.34.34.76.51 1.18.51.42 0 .84-.17 1.18-.5.67-.68.67-1.72 0-2.4L14.39 12l9.1-9.1c.68-.68.68-1.73 0-2.4a1.67 1.67 0 0 0-2.39 0L12 9.6 2.9.55a1.67 1.67 0 0 0-2.4 0 1.67 1.67 0 0 0 0 2.4L9.6 12 .55 21.1a1.62 1.62 0 0 0 0 2.36z" />
  </svg>
);

ModalClose.defaultProps = {
  fill: 'currentColor',
  handleClick: () => {},
};

ModalClose.propTypes = {
  fill: PropTypes.string,
  handleClick: PropTypes.func,
};

export default ModalClose;
