import React from 'react';
import { useLocation } from 'react-router-dom';

const Pathname = () => {
  const { pathname } = useLocation();

  return (
    <div className="ta-center">
      <h2>{pathname}</h2>
    </div>
  );
};

export default Pathname;
