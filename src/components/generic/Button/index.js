import React from 'react';
import PropTypes from 'prop-types';
import { cnj } from 'utils';
import './index.scss';

/* eslint-disable react/button-has-type */

const Button = ({ className, children, button, onClick }) => (
  <button
    className={cnj(['Button', button.isDisabled && 'Button--disabled', className])}
    title={button.title}
    type={button.type || 'button'}
    onClick={onClick}
    disabled={button.isDisabled}
  >
    {children || button.label}
  </button>
);

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  button: PropTypes.exact({
    label: PropTypes.string,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit']),
  }),
};

Button.defaultProps = {
  className: undefined,
  children: undefined,
  onClick: undefined,
  button: {
    label: 'label',
    title: undefined,
    isDisabled: false,
    type: 'button',
  },
};
