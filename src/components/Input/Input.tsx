import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './Input.styles.less';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  invalid?: boolean;
  component?: React.ElementType;
}

export default function Input({
  className,
  invalid = false,
  component: Element = 'input',
  ...others
}: InputProps) {
  const [theme] = useTheme();
  return (
    <Element
      className={cx(classes.input, classes[theme], { [classes.invalid]: invalid }, className)}
      {...others}
    />
  );
}
