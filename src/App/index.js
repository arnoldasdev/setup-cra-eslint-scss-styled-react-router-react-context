import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextAuth } from 'store-context/auth/Auth';
import Layout from 'components/Layout';
import { Header, Footer } from 'components/views';
import { Authenticated, Login } from 'components/switches';
import './index.scss';

const App = () => {
  const [auth] = useContext(ContextAuth);

  return (
    <div className="App" data-testid="App">
      <Router>
        {auth.isAuthenticated
          ? <Layout views={{ Content: Authenticated, Header, Footer }} />
          : <Layout views={{ Content: Login, Footer }} />}
      </Router>
    </div>
  );
};

export default App;
