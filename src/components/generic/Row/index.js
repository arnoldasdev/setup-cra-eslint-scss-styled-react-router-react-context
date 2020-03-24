import React from 'react';
import PropTypes from 'prop-types';
import { cnj } from 'utils';
import './index.scss';

const Row = ({ className, children, cols }) => (
  <div className={cnj(['Row', `Row-${cols}-col`, className])}>
    {React.Children.map(children, child => (
      <div className="col">{child}</div>
    ))}
  </div>
);

export default Row;

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  cols: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Row.defaultProps = {
  className: undefined,
  cols: 1,
};
