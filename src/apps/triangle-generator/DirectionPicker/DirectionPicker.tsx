import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../../ThemeProvider';
import directions from '../directions';
import Chevron from './Chevron';
import classes from './DirectionPicker.styles.less';

interface DirectionPickerProps {
  className?: string;
  value?: string;
  onChange: (value: string) => void;
}

export default function DirectionPicker({ className, value, onChange }: DirectionPickerProps) {
  const [theme] = useTheme();

  const contols = directions.map((direction) => (
    <button
      type="button"
      onClick={() => onChange(direction)}
      className={cx(classes.control, { [classes.active]: value === direction })}
      key={direction}
    >
      <Chevron direction={direction} />
    </button>
  ));

  contols.splice(4, 0, <div className={classes.blank} key="blank" />);

  return <div className={cx(classes.wrapper, classes[theme], className)}>{contols}</div>;
}
