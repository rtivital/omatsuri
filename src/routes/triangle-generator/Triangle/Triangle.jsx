import React from 'react';
import PropTypes from 'prop-types';
import directions from '../directions';
import getTriangleStyles from '../get-triangle-styles';

export default function Triangle({ width, height, color, direction }) {
  return <div style={getTriangleStyles({ width, height, color, direction })} />;
}

Triangle.propTypes = {
  direction: PropTypes.oneOf(directions).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
