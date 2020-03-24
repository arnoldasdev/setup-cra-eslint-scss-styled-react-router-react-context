import React from 'react';
import PropTypes from 'prop-types';
import { cnj } from 'utils';

const Form = ({ className, children, onSubmit }) => (
  <form className={cnj(['Form', className])} onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  className: undefined,
  onSubmit: undefined,
};
