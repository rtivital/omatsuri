import React from 'react';
import PropTypes from 'prop-types';
import oc from 'open-color';

const angles = {
  top: 180,
  bottom: 0,
  right: 270,
  left: 90,
  'bottom-right': 315,
  'bottom-left': 45,
  'top-right': 225,
  'top-left': 135,
};

export default function Chevron({ direction }) {
  return (
    <div
      style={{
        width: 26,
        height: 26,
        transform: `rotate(${angles[direction]}deg)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg viewBox="0 0 66 36" xmlns="http://www.w3.org/2000/svg" style={{ flex: 1 }}>
        <path
          d="M3 3l30 30L63 3"
          fill="none"
          fillRule="evenodd"
          stroke={oc.gray[7]}
          strokeLinecap="round"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
}

Chevron.propTypes = {
  direction: PropTypes.oneOf(Object.keys(angles)).isRequired,
};
