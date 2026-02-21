import React from 'react';
import getTriangleStyles from '../get-triangle-styles';

export default function Triangle({ width, height, color, direction }) {
  return (
    <div
      style={{
        ...getTriangleStyles({ width, height, color, direction }),
        transition: 'border 250ms ease',
      }}
    />
  );
}
