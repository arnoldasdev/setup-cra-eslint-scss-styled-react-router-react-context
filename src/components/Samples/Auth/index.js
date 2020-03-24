import React, { useContext } from 'react';
import { ContextAuth } from 'store-context/auth/Auth';
import { Button } from 'components/generic';

const Auth = () => {
  const [auth, setAuth] = useContext(ContextAuth);
  const login = () => setAuth({ isAuthenticated: true });
  const logout = () => setAuth({ isAuthenticated: false });

  return (
    <>
      <h5>context-state</h5>
      {auth.isAuthenticated
        ? <Button onClick={logout} button={{ label: 'Log out', title: 'Log out' }} />
        : <Button onClick={login} button={{ label: 'Log in', title: 'Log in' }} />}
    </>
  );
};

export default Auth;
