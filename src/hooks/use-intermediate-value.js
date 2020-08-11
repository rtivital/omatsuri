import { useState, useEffect } from 'react';

export default function useIntermediateValue({ value, onChange, rule, format = f => f }) {
  const [valid, setValid] = useState(true);
  const [intermediateValue, setIntermediateValue] = useState(value);

  useEffect(() => {
    setIntermediateValue(value);
  }, [value]);

  const handleChange = val => {
    const isValid = rule(val);
    setIntermediateValue(val);
    setValid(isValid);
    isValid && onChange(format(val));
  };

  const handleSubmit = val => {
    const isValid = rule(val);
    setValid(true);

    if (isValid) {
      setIntermediateValue(val);
    } else {
      setIntermediateValue(value);
    }
  };

  return {
    valid,
    intermediateValue,
    handleChange,
    handleSubmit,
  };
}
