import React from 'react';
import { useIntermediateValue } from '@hooks';
import Input from '../Input/Input';

interface NumberInputProps {
  className?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  [key: string]: any;
}

export default function NumberInput({
  value,
  onChange,
  min = 0,
  max = 100,
  ...others
}: NumberInputProps) {
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
