import React from 'react';
import Background from '../../../components/Background/Background';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import DirectionPicker from '../DirectionPicker/DirectionPicker';
import SizePicker from '../SizePicker/SizePicker';
import ColorPicker from '../ColorPicker/ColorPicker';
import classes from './Settings.styles.less';

export default function Settings({ values, handlers }) {
  return (
    <Background className={classes.wrapper}>
      <div className={classes.inner}>
        <div className={classes.section}>
          <SettingsLabel>Direction</SettingsLabel>
          <DirectionPicker value={values.direction} onChange={handlers.onDirectionChange} />
        </div>

        <div className={classes.section}>
          <SettingsLabel>Size</SettingsLabel>
          <SizePicker
            value={{ width: values.width, height: values.height }}
            predefinedSizes={values.predefinedSizes}
            setPredefinedSize={handlers.setPredefinedSize}
            activePredefinedSize={values.activePredefinedSize}
            onWidthChange={handlers.onWidthChange}
            onHeightChange={handlers.onHeightChange}
          />
        </div>

        <div className={classes.section}>
          <SettingsLabel>Color</SettingsLabel>
          <ColorPicker value={values.color} onChange={handlers.onColorChange} />
        </div>
      </div>
    </Background>
  );
}
