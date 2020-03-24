import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'store-context/Provider';
import { ContextAuth } from 'store-context/auth/Auth';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

ReactDOM.render(
  <Provider Context={ContextAuth} state={{ isAuthenticated: false }}>
    <App />
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
