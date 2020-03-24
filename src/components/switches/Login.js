import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from 'components/views';

const SwitchLogin = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route render={() => <Redirect to="/login" />} />
  </Switch>
);

export default SwitchLogin;
