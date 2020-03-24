import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import colors from 'styles/styled/var/colors';
import { cnj } from 'utils';
import Anchor from '../Anchor';

const AnchorButtonStyled = styled(Anchor)`
  background-color: ${colors.react};
  color: ${colors.dark};

  ${({ anchor }) => (anchor.isDisabled
    ? css`
          background-color: ${colors.grey};
          cursor: default;
        `
    : css`
          &:hover {
            background-color: ${colors.hover};
            color: ${colors.dark};
          }
        `)}
`;

const AnchorButton = ({ className, anchor, ...props }) => (
  <AnchorButtonStyled
    className={cnj([className])}
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
