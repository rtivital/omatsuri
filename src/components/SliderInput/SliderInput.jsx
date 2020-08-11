import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from '../Slider/Slider';
import classes from './SliderInput.styles.less';

export default function SliderInput({ className, value, onChange, min = 0, max = 100 }) {
  return (
    <div className={cx(classes.wrapper, className)}>
      <Slider min={min} max={max} value={value} onChange={onChange} />
    </div>
  );
}

SliderInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};
