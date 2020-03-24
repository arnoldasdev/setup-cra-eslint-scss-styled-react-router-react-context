import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Header = ({ children }) => (
  <header className="Header" data-testid="Header">
    {children}
  </header>
);

export default Header;

Header.propTypes = {
  children: PropTypes.element.isRequired,
};
