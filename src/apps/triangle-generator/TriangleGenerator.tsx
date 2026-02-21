import oc from 'open-color';
import React, { useState, useEffect } from 'react';
import Color from 'color';
import { useDocumentTitle, useLocalStorage } from '@hooks';
import Settings from './Settings/Settings';
import TrianglePreview from './TrianglePreview/TrianglePreview';
import Code from './Code/Code';
import classes from './TriangleGenerator.styles.less';

const predefinedSizes = {
  sm: { width: 10, height: 6 },
  md: { width: 22, height: 12 },
  lg: { width: 54, height: 36 },
  xl: { width: 128, height: 94 },
};

const INITIAL_VALUES = {
  direction: 'bottom',
  width: predefinedSizes.lg.width,
  height: predefinedSizes.lg.height,
  color: oc.violet[7],
  theme: 'light',
};

function getActivePredefinedSize({ width, height }) {
  return Object.keys(predefinedSizes).find(
    (size) => predefinedSizes[size].width === width && predefinedSizes[size].height === height
  );
}

export default function TriangleGenerator() {
  useDocumentTitle('Triangle generator');

  const ls = useLocalStorage({ key: '@omatsuri/triangle-generator', delay: 1000 });
  const initialValues = ls.retrieve() || INITIAL_VALUES;

  const [direction, onDirectionChange] = useState(initialValues.direction);
  const [width, onWidthChange] = useState(initialValues.width);
  const [height, onHeightChange] = useState(initialValues.height);
  const [color, onColorChange] = useState(initialValues.color);
  const [theme, setTheme] = useState(initialValues.theme);

  useEffect(() => {
    ls.save({ direction, width, height, color, theme });
    return ls.cancel;
  }, [direction, width, height, color, theme]);

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  const setPredefinedSize = (size) => {
    if (size in predefinedSizes) {
      const values = predefinedSizes[size];
      onWidthChange(values.width);
      onHeightChange(values.height);
    }
  };

  const handleColorChange = (value) => {
    onColorChange(value);
    if (Color(value).isLight()) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const values = {
    predefinedSizes,
    activePredefinedSize: getActivePredefinedSize({ width, height }),
    direction,
    height,
    width,
    color,
  };

  const handlers = {
    onDirectionChange,
    onWidthChange,
    onHeightChange,
    setPredefinedSize,
    onColorChange: handleColorChange,
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.row}>
        <Settings values={values} handlers={handlers} />
      </div>

      <div className={classes.row}>
        <TrianglePreview values={values} theme={theme} onThemeToggle={toggleTheme} />
      </div>

      <div className={classes.row}>
        <Code values={values} />
      </div>
    </div>
  );
}
