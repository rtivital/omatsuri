import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from '../Slider/Slider';
import NumberInput from '../NumberInput/NumberInput';
import classes from './SliderInput.styles.less';

export default function SliderInput({ className, value, onChange, min = 0, max = 100 }) {
  return (
    <div className={cx(classes.wrapper, className)}>
      <NumberInput
        className={classes.input}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
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
