import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import sun from './icons/sun.svg';
import moon from './icons/moon.svg';
import classes from './ThemeToggle.styles.less';

export default function ThemeToggle({ className, theme, onToggle, label = 'mode' }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cx(classes.control, classes[theme], className)}
    >
      {theme === 'light' ? (
        <>
          <img className={classes.icon} src={moon} alt="" />
          <div className={classes.label}>Dark {label}</div>
        </>
      ) : (
        <>
          <img className={classes.icon} src={sun} alt="" />
          <div className={classes.label}>Light {label}</div>
        </>
      )}
    </button>
  );
}

ThemeToggle.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggle: PropTypes.func.isRequired,
  label: PropTypes.string,
};
