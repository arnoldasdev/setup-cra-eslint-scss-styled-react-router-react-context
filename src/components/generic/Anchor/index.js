import React from 'react';
import PropTypes from 'prop-types';
import { cnj } from 'utils';
import './index.scss';

const Anchor = ({ className, children, anchor, onClick }) => (
  <a
    className={cnj(['Anchor', anchor.isDisabled && 'Anchor--disabled', className])}
    href={anchor.href}
    title={anchor.title}
    target={anchor.target}
    onClick={anchor.isDisabled ? e => e.preventDefault() : onClick}
    rel="noopener noreferrer"
  >
    {children || anchor.label}
  </a>
);

export default Anchor;

Anchor.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  anchor: PropTypes.exact({
    label: PropTypes.string,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
  }),
};

Anchor.defaultProps = {
  className: undefined,
  children: undefined,
  onClick: undefined,
  anchor: {
    label: 'label',
    title: undefined,
    isDisabled: false,
    href: '#',
    target: '_self',
  },
};
