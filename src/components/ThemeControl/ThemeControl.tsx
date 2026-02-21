import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import ThemeIcon from './ThemeIcon';
import classes from './ThemeControl.styles.less';

interface ThemeControlProps {
  className?: string;
}

export default function ThemeControl({ className }: ThemeControlProps) {
  const [theme, setTheme] = useTheme();

  return (
    <div className={cx(classes.themeControl, classes[theme], className)}>
      <button
        className={classes.control}
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <div className={classes.controlInner}>
          <div className={classes.label}>Toggle theme</div>
          <div className={classes.currentTheme}>
            <ThemeIcon theme={theme} size={15} />
            <div className={classes.name}>{theme} theme</div>
          </div>
        </div>
      </button>
    </div>
  );
}
