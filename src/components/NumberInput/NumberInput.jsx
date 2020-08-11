import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './NumberInput.styles.less';

export default function NumberInput({ className, value, onChange, min = 0, max = 100 }) {
  const [valid, setValid] = useState(true);
  const [intermidiateValue, setIntermediateValue] = useState(value.toString());
  const isInputValid = val => !Number.isNaN(val) && val <= max && val >= min;

  useEffect(() => {
    setIntermediateValue(value);
  }, [value]);

  const handleChange = event => {
    const parsedValue = Number(event.target.value, 10);
    const isValid = isInputValid(parsedValue);

    setIntermediateValue(event.target.value);
    setValid(isValid);

    isValid && onChange(parsedValue);
  };

  const handleBlur = event => {
    const parsedValue = Number(event.target.value, 10);
    const isValid = isInputValid(parsedValue);

    setValid(true);

    if (isValid) {
      setIntermediateValue(parsedValue.toString());
    } else {
      setIntermediateValue(value.toString());
    }
  };

  return (
    <input
      className={cx(classes.input, { [classes.invalid]: !valid }, className)}
      type="text"
      value={intermidiateValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

NumberInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};
