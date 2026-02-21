import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './Background.styles.less';

interface BackgroundProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  component?: React.ElementType;
}

export default function Background({
  className,
  component: Element = 'div',
  ...others
}: BackgroundProps) {
  const [theme] = useTheme();
  return <Element className={cx(classes.background, classes[theme], className)} {...others} />;
}
