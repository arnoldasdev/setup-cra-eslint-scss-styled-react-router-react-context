import React from 'react';
import PropTypes from 'prop-types';
import { Box, Background, Body, Content, AnchorButton } from './elements';

const StyledComponent = ({ content, anchor }) => (
  <Box>
    <Background />
    <Body>
      <Content>{content.text}</Content>
      <AnchorButton anchor={anchor} />
    </Body>
  </Box>
);

export default StyledComponent;

StyledComponent.propTypes = {
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

StyledComponent.defaultProps = {
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
