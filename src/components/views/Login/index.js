import React from 'react';
import { Row } from 'components/generic';
import { Auth } from 'components/Samples';
import { Pathname } from 'components/utils';

const Login = () => (
  <div className="view-Login">
    <Row className="ta-center">
      <Pathname />
      <Auth />
    </Row>
  </div>
);

export default Login;
