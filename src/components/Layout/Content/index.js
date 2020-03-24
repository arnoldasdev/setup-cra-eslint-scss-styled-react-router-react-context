import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Content = ({ children }) => (
  <div className="Content" data-testid="Content">
    {children}
  </div>
);

export default Content;

Content.propTypes = {
  children: PropTypes.element.isRequired,
};
