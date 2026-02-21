import React from 'react';
import cx from 'clsx';
import Slider from './Slider';
import NumberInput from '../NumberInput/NumberInput';
import classes from './SliderInput.styles.less';

interface SliderInputProps {
  className?: string;
  value: number;
  onChange: (value: number) => void;
  trackSize?: number;
  min?: number;
  max?: number;
}

export default function SliderInput({
  className,
  value,
  onChange,
  trackSize = 200,
  min = 0,
  max = 100,
}: SliderInputProps) {
  return (
    <div className={cx(classes.wrapper, className)}>
      <NumberInput
        className={classes.input}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
      <Slider min={min} max={max} value={value} onChange={onChange} trackSize={trackSize} />
    </div>
  );
}
