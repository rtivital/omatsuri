import oc from 'open-color';
import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import useDocumentTitle from '../../hooks/use-document-title';
import Settings from './Settings/Settings';
import TrianglePreview from './TrianglePreview/TrianglePreview';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import classes from './TriangleGenerator.styles.less';

const predefinedSizes = {
  sm: { width: 10, height: 6 },
  md: { width: 22, height: 12 },
  lg: { width: 54, height: 36 },
  xl: { width: 128, height: 94 },
};

function getActivePredefinedSize({ width, height }) {
  return Object.keys(predefinedSizes).find(
    size => predefinedSizes[size].width === width && predefinedSizes[size].height === height
  );
}

export default function TriangleGenerator() {
  useDocumentTitle('Triangle generator');

  const [direction, onDirectionChange] = useState('bottom');
  const [width, onWidthChange] = useState(predefinedSizes.lg.width);
  const [height, onHeightChange] = useState(predefinedSizes.lg.height);
  const [color, onColorChange] = useState(oc.violet[7]);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(current => (current === 'light' ? 'dark' : 'light'));

  const setPredefinedSize = size => {
    if (size in predefinedSizes) {
      const values = predefinedSizes[size];
      onWidthChange(values.width);
      onHeightChange(values.height);
    }
  };

  const handleColorChange = value => {
    onColorChange(value);
    if (tinycolor(value).isLight()) {
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
      <div className={classes.column}>
        <Settings values={values} handlers={handlers} />
      </div>

      <div className={classes.column}>
        <div className={classes.header}>
          <h2 className={classes.title}>Preview</h2>
          <ThemeToggle theme={theme} onToggle={toggleTheme} label="preview" />
        </div>

        <TrianglePreview values={values} theme={theme} />
      </div>
    </div>
  );
}
