import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './Tabs.styles.less';

interface TabItem {
  value: string;
  label: string;
}

interface TabsProps {
  className?: string;
  data: TabItem[];
  active?: string;
  onTabChange: (value: string) => void;
}

export default function Tabs({ className, data, active, onTabChange }: TabsProps) {
  const [theme] = useTheme();

  const tabs = data.map((tab) => (
    <button
      type="button"
      key={tab.value}
      onClick={() => onTabChange(tab.value)}
      className={cx(classes.control, {
        [classes.active]: active === tab.value,
      })}
    >
      {tab.label}
    </button>
  ));

  return <div className={cx(classes.tabs, classes[theme], className)}>{tabs}</div>;
}
