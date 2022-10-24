import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button({ children, classSelector }) {
  return <button className={`button button-${classSelector}`} type="button">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classSelector: PropTypes.string.isRequired,
};

export default Button;
