import React from 'react';
import PropTypes from 'prop-types';
import { useIntermediateValue } from 'xooks';
import Input from '../Input/Input';

export default function NumberInput({ value, onChange, min = 0, max = 100, ...others }) {
  const { intermediateValue, valid, handleChange, handleSubmit } = useIntermediateValue({
    value,
    onChange,
    rule: (val) => !Number.isNaN(val) && val <= max && val >= min,
    format: (val) => Number(val),
  });

  return (
    <Input
      {...others}
      invalid={!valid}
      type="text"
      value={intermediateValue}
      onChange={(event) => handleChange(event.target.value)}
      onBlur={(event) => handleSubmit(event.target.value)}
    />
  );
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};
