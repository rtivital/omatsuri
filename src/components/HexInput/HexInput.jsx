import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import useIntermediateValue from '../../hooks/use-intermediate-value';

export default function HexInput({ value, onChange, ...others }) {
  const { intermediateValue, valid, handleChange, handleSubmit } = useIntermediateValue({
    value,
    onChange,
    rule: val => /^#[0-9A-F]{6}$/i.test(val),
  });

  return (
    <Input
      {...others}
      invalid={!valid}
      type="text"
      value={intermediateValue}
      onChange={event => handleChange(event.target.value)}
      onBlur={event => handleSubmit(event.target.value)}
    />
  );
}

HexInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
