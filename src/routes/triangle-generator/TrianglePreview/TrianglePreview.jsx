import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Triangle from '../Triangle/Triangle';
import Background from '../../../components/Background/Background';
import ThemeToggle from '../../../components/ThemeToggle/ThemeToggle';
import directions from '../directions';
import classes from './TrianglePreview.styles.less';

export default function TrianglePreview({ values, theme, onThemeToggle }) {
  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <ThemeToggle
        className={classes.themeToggle}
        theme={theme}
        onToggle={onThemeToggle}
        label="preview"
      />
      <div className={classes.overlay} />
      <div className={classes.background} />
      <div className={classes.triangle}>
        <Triangle {...values} />
      </div>
    </Background>
  );
}

TrianglePreview.propTypes = {
  onThemeToggle: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  values: PropTypes.shape({
    direction: PropTypes.oneOf(directions).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
