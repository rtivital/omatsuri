import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../../ThemeProvider';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Background from '../../../components/Background/Background';
import Button from '../../../components/Button/Button';
import classes from './Settings.styles.less';

export default function Settings({
  darken,
  onDarkenChange,
  saturation,
  onSaturationChange,
  onPaletteLoad,
  onAllRemove,
  canRemove,
}) {
  const [theme] = useTheme();

  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.settings}>
        <div className={classes.settingsControl}>
          <div className={classes.label}>Darken/lighten by, %</div>
          <SliderInput
            value={Math.round(darken * 100)}
            onChange={(value) => onDarkenChange(value / 100)}
            min={1}
            max={100}
          />
        </div>

        <div className={classes.settingsControl}>
          <div className={classes.label}>Saturation shift, %</div>
          <SliderInput
            value={Math.round(saturation * 100)}
            onChange={(value) => onSaturationChange(value / 100)}
            min={-50}
            max={50}
          />
        </div>
      </div>
      <div className={classes.controls}>
        <Button className={classes.control} onClick={onPaletteLoad}>
          Load default palette
        </Button>
        {canRemove && (
          <Button className={classes.control} onClick={onAllRemove} theme="red">
            Remove all
          </Button>
        )}
      </div>
    </Background>
  );
}
