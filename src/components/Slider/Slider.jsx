import oc from 'open-color';
import React from 'react';
import PropTypes from 'prop-types';
import SliderComponent from 'react-input-slider';

export default function Slider({ min, max, value, onChange }) {
  return (
    <SliderComponent
      axis="x"
      xmin={min}
      xmax={max}
      x={value}
      onChange={({ x }) => onChange(x)}
      styles={{
        track: {
          width: 220,
          backgroundColor: oc.gray[2],
          height: 12,
        },

        thumb: {
          boxShadow: '1px 2px 5px 1px rgba(0,0,0,.2)',
          border: `1px solid ${oc.gray[2]}`,
        },

        active: {
          backgroundColor: oc.violet[5],
        },
      }}
    />
  );
}

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
