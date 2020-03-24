import React from 'react';
import PropTypes from 'prop-types';
import { cnj } from 'utils';
import Anchor from '../Anchor';
import './index.scss';

const AnchorButton = ({ className, anchor, ...props }) => (
  <Anchor
    className={cnj(['AnchorButton', anchor.isDisabled && 'AnchorButton--disabled', className])}
    anchor={anchor}
    {...props}
  />
);

export default AnchorButton;

AnchorButton.propTypes = {
  className: PropTypes.string,
  anchor: PropTypes.exact({
    label: PropTypes.string,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
  }),
};

AnchorButton.defaultProps = {
  className: undefined,
  anchor: {
    label: 'label',
    title: undefined,
    isDisabled: false,
    href: '#',
    target: '_self',
  },
};
