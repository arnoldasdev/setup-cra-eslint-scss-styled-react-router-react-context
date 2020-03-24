import React from 'react';
import PropTypes from 'prop-types';
import { cnj } from 'utils';
import Button from '../Button';

const ButtonSubmit = ({ className, button, ...props }) => (
  <Button
    className={cnj(['ButtonSubmit', button.isDisabled && 'ButtonSubmit--disabled', className])}
    button={{ ...button, type: 'submit' }}
    {...props}
  />
);

export default ButtonSubmit;

ButtonSubmit.propTypes = {
  className: PropTypes.string,
  button: PropTypes.exact({
    label: PropTypes.string,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
  }),
};

ButtonSubmit.defaultProps = {
  className: undefined,
  button: {
    label: 'label',
    title: undefined,
    isDisabled: false,
  },
};
