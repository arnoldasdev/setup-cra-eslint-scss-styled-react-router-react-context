import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Container = ({ Context, state, children }) => {
  const [value, setValue] = useState(state);
  return (
    <Context.Provider value={[value, setValue]}>
      {children}
    </Context.Provider>
  );
};

/* eslint-disable react/forbid-prop-types */

Container.propTypes = {
  Context: PropTypes.elementType.isRequired,
  state: PropTypes.any,
  children: PropTypes.element.isRequired,
};

Container.defaultProps = {
  state: null,
};

export default Container;
