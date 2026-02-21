import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './Button.styles.less';

interface ButtonProps {
  className?: string | null;
  component?: React.ElementType;
  theme?: 'primary' | 'success' | 'secondary' | 'blue' | 'red';
  elementRef?: React.Ref<any> | null;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function Button({
  className = null,
  component: Element = 'button',
  type = 'button',
  theme = 'primary',
  elementRef = null,
  children = null,
  ...others
}: ButtonProps) {
  const [appTheme] = useTheme();

  return (
    <Element
      data-button
      className={cx(classes.button, classes[theme], classes[appTheme], className)}
      type={type}
      ref={elementRef}
      {...others}
    >
      {children}
    </Element>
  );
}
