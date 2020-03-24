import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { cnj } from 'utils';

const Anchor = ({ className, children, anchor, onClick }) => (
  <a
    className={cnj([className])}
    href={anchor.href}
    title={anchor.title}
    target={anchor.target}
    onClick={anchor.isDisabled ? e => e.preventDefault() : onClick}
    rel="noopener noreferrer"
  >
    {children || anchor.label}
  </a>
);

const AnchorStyled = styled(Anchor)`
  border-radius: 2px;
  transition: background-color 200ms;

  ${({ anchor }) => anchor.isDisabled
    && css`
      &:hover {
        cursor: default;
      }
    `}
`;

export default AnchorStyled;

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
