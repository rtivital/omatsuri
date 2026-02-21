import React from 'react';
import cx from 'clsx';
import Triangle from '../Triangle/Triangle';
import Background from '../../../components/Background/Background';
import ThemeToggle from './ThemeToggle/ThemeToggle';
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
      <div className={classes.triangle}>
        <Triangle {...values} />
      </div>
    </Background>
  );
}
