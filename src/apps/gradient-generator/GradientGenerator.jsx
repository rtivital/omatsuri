import React, { useState } from 'react';
import { useDocumentTitle, useListState } from 'xooks';
import { v4 } from 'uuid';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import GradientLine from './GradientLine/GradientLine';
import GradientColors from './GradientColors/GradientColors';
import GradientSettings from './GradientSettings/GradientSettings';
import GradientPreview from './GradientPreview/GradientPreview';
import GradientCode from './GradientCode/GradientCode';
import classes from './GradientGenerator.styles.less';

const DEFAULT_VALUES = [
  { color: '#ed6ea0', position: 10, opacity: 100, key: v4() },
  { color: '#ec8c69', position: 90, opacity: 100, key: v4() },
];

export default function GradientGenerator() {
  useDocumentTitle('Gradient generator');

  const [values, handlers] = useListState(DEFAULT_VALUES);
  const [angle, setAngle] = useState(90);
  const [type, setType] = useState('linear');

  return (
    <>
      <GradientPreview values={values} angle={angle} type={type} className={classes.preview} />
      <Background className={classes.controls}>
        <GradientLine values={values} handlers={handlers} />
        <div className={classes.body}>
          <div className={classes.column} style={{ flex: '0 0 203px' }}>
            <SettingsLabel>Settings</SettingsLabel>
            <GradientSettings
              angle={angle}
              type={type}
              onTypeChange={setType}
              onAngleChange={setAngle}
            />
          </div>
          <div className={classes.column}>
            <SettingsLabel>Colors</SettingsLabel>
            <GradientColors values={values} handlers={handlers} />
          </div>
        </div>
      </Background>
      <GradientCode values={values} type={type} angle={angle} />
    </>
  );
}
