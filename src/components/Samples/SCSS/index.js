import React from 'react';
import PropTypes from 'prop-types';
import { AnchorButton } from 'components/generic';
import './index.scss';

const SCSSC = ({ content, anchor }) => (
  <div className="Box">
    <div className="Box-background" />
    <div className="Box-body">
      <span className="Box-content">{content.text}</span>
      <AnchorButton className="Box-button" anchor={anchor} />
    </div>
  </div>
);

export default SCSSC;

SCSSC.propTypes = {
  content: PropTypes.exact({
    text: PropTypes.string.isRequired,
  }),
  anchor: PropTypes.exact({
    label: PropTypes.string,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
  }),
};

SCSSC.defaultProps = {
  content: {
    text: 'text',
  },
  anchor: {
    label: 'label',
    title: undefined,
    isDisabled: false,
    href: '#',
    target: '_self',
  },
};
