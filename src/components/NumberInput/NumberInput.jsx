import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import useIntermediateValue from '../../hooks/use-intermediate-value';
import classes from './NumberInput.styles.less';

export default function NumberInput({ className, value, onChange, min = 0, max = 100 }) {
  const { intermediateValue, valid, handleChange, handleSubmit } = useIntermediateValue({
    value,
    onChange,
    rule: val => !Number.isNaN(val) && val <= max && val >= min,
    format: val => Number(val),
  });

  return (
    <input
      className={cx(classes.input, { [classes.invalid]: !valid }, className)}
      type="text"
      value={intermediateValue}
      onChange={event => handleChange(event.target.value)}
      onBlur={event => handleSubmit(event.target.value)}
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
