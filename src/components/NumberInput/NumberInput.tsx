import React from 'react';
import { TextInput } from '@mantine/core';
import { useIntermediateValue } from '@hooks';

interface NumberInputProps {
  className?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  [key: string]: any;
}

export default function NumberInput({
  className,
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
    <TextInput
      {...(others as any)}
      error={!valid || undefined}
      value={intermediateValue}
      onChange={(event) => handleChange(event.target.value)}
      onBlur={(event) => handleSubmit(event.target.value)}
      classNames={{ input: className }}
    />
  );
}
