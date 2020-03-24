import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, About, Fetch } from 'components/views';

const SwitchAuthenticated = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/fetch" exact component={Fetch} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default SwitchAuthenticated;
