import React from 'react';
import { SegmentedControl } from '@mantine/core';
import { useTheme } from '../../../ThemeProvider';
import SliderInput from '../../../components/SliderInput/SliderInput';
import classes from './SizePicker.styles.module.css';

export default function SizePicker({
  setPredefinedSize,
  activePredefinedSize,
  predefinedSizes,
  value,
  onWidthChange,
  onHeightChange,
}) {
  const [theme] = useTheme();

  return (
    <div className={classes[theme]}>
      <div className={classes.title}>Predefined sizes</div>
      <SegmentedControl
        data={Object.keys(predefinedSizes).map((val) => ({ value: val, label: val }))}
        onChange={setPredefinedSize}
        value={activePredefinedSize}
      />

      <div className={classes.field}>
        <div className={classes.title}>Width, px</div>
        <SliderInput value={value.width} onChange={onWidthChange} min={1} max={200} />
      </div>

      <div className={classes.field}>
        <div className={classes.title}>Height, px</div>
        <SliderInput value={value.height} onChange={onHeightChange} min={1} max={200} />
      </div>
    </div>
  );
}
