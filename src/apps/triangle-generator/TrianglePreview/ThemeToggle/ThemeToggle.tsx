import React from 'react';
import cx from 'clsx';
import ThemeControl from '../../../../components/ThemeControl/ThemeIcon';
import classes from './ThemeToggle.styles.less';

export default function ThemeToggle({ className, theme, onToggle, label = 'mode' }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cx(classes.control, classes[theme], className)}
    >
      <ThemeControl theme={theme === 'light' ? 'dark' : 'light'} size={18} />
      <div className={classes.label}>
        {theme === 'light' ? 'Dark' : 'Light'} {label}
      </div>
    </button>
  );
}
