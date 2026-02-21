import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../../../ThemeProvider';
import classes from './Keycap.styles.less';

const PREDEFINED_VALUES = {
  ArrowUp: '↑',
  ArrowRight: '→',
  ArrowLeft: '←',
  ArrowDown: '↓',
  Backspace: '⇇',
  Tab: '⇥',
  Escape: 'Esc',
  Enter: null,
  Cmd: null,
};

interface KeycapProps {
  value: string;
  className?: string;
}

export default function Keycap({ value, className }: KeycapProps) {
  const [theme] = useTheme();

  return (
    <div
      className={cx(
        classes.keycap,
        {
          [classes.shift]: value === 'Shift',
          [classes.alt]: value === 'Alt',
          [classes.control]: value === 'Ctrl',
          [classes.meta]: value === 'Cmd',
          [classes.space]: value === ' ',
          [classes.enter]: value === 'Enter',
        },
        classes[theme],
        className
      )}
    >
      {value in PREDEFINED_VALUES ? PREDEFINED_VALUES[value] : value}
    </div>
  );
}
