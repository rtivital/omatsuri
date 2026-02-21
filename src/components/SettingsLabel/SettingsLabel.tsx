import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './SettingsLabel.styles.less';

interface SettingsLabelProps {
  className?: string;
  children: React.ReactNode;
}

export default function SettingsLabel({ className, children }: SettingsLabelProps) {
  const [theme] = useTheme();
  return <h2 className={cx(classes.label, classes[theme], className)}>{children}</h2>;
}
