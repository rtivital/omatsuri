import React, { useState, useEffect } from 'react';
import { useDocumentTitle, useListState, useLocalStorage } from '@hooks';
import { v4 } from 'uuid';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import GradientLine from './GradientLine/GradientLine';
import GradientColors from './GradientColors/GradientColors';
import GradientSettings from './GradientSettings/GradientSettings';
import GradientPreview from './GradientPreview/GradientPreview';
import GradientCode from './GradientCode/GradientCode';
import GradientsGallery from './GradientsGallery/GradientsGallery';
import classes from './GradientGenerator.styles.less';

const INITIAL_VALUES = {
  angle: 90,
  type: 'linear',
  values: [
    { color: '#ed6ea0', position: 10, opacity: 100, key: v4() },
    { color: '#ec8c69', position: 90, opacity: 100, key: v4() },
  ],
};

export default function GradientGenerator() {
  useDocumentTitle('Gradient generator');

  const ls = useLocalStorage({ key: '@omatsuri/gradient-generator', delay: 1000 });
  const initialValues = ls.retrieve() || INITIAL_VALUES;

  const [values, handlers] = useListState(initialValues.values);
  const [angle, setAngle] = useState(initialValues.angle);
  const [type, setType] = useState(initialValues.type);

  useEffect(() => {
    ls.save({ values, angle, type });
    return ls.cancel;
  }, [values, angle, type]);

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
      <GradientsGallery handlers={handlers} />
    </>
  );
}
