import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Footer = ({ children }) => (
  <footer className="Footer" data-testid="Footer">
    {children}
  </footer>
);

export default Footer;

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};
