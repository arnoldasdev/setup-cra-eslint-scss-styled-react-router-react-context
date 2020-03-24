import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from 'store-context/auth/Auth';
import { Button } from 'components/generic';
import logo from 'logo.svg';
import './index.scss';

const Header = () => {
  const [, setAuth] = useContext(ContextAuth);
  const logout = () => setAuth({ isAuthenticated: false });

  return (
    <div className="view-Header">
      <div className="view-Header-logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="view-Header-nav">
        <a href="/" title="/">/</a>
        <Link to="/" title="home">/home</Link>
        <Link to="/fetch" title="fetch">/fetch</Link>
        <Link to="/about" title="about">/about</Link>
        <Link to="/redirect" title="redirect to /">/redirect</Link>
        <Button onClick={logout} button={{ label: 'Log out', title: 'Log out' }} />
      </nav>
    </div>
  );
};

export default Header;
