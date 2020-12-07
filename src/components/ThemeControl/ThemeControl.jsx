import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import ThemeIcon from './ThemeIcon';
import classes from './ThemeControl.styles.less';

export default function ThemeControl({ className }) {
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

ThemeControl.propTypes = {
  className: PropTypes.string,
};
