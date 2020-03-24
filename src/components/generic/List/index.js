import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const List = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={uuid()}>{item}</li>
    ))}
  </ul>
);

export default List;

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
