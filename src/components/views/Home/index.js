import React from 'react';
import { List } from 'components/generic';
import Samples from 'components/Samples';

const list = [
  'react-context',
  'react-router',
  'styled-components',
  'scss',
  'eslint [airbnb]',
];

const Home = () => (
  <div className="view-Home">
    <h2>[setup]-create-react-app</h2>
    <List list={list} />
    <Samples />
  </div>
);

export default Home;
