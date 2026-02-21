import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import Input from '../Input/Input';
import classes from './Select.styles.less';

interface SelectItem {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  data: SelectItem[];
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
}

export default function Select({ className, data, value, onChange, id, label }: SelectProps) {
  const [theme] = useTheme();
  const options = data.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className={cx(classes.select, classes[theme], className)}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <div className={classes.controlWrapper}>
        <Input
          component="select"
          className={classes.control}
          id={id}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          {options}
        </Input>
        <svg
          className={classes.chevron}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
