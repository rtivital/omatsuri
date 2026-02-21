import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../../ThemeProvider';
import DirectionPicker from '../../triangle-generator/DirectionPicker/DirectionPicker';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Tabs from '../../../components/Tabs/Tabs';
import classes from './GradientSettings.styles.less';

const DIRECTIONS = {
  'top-left': 315,
  top: 0,
  'top-right': 45,
  left: 270,
  right: 90,
  'bottom-left': 225,
  bottom: 180,
  'bottom-right': 135,
};

interface GradientSettingsProps {
  className?: string;
  type: 'linear' | 'radial';
  onTypeChange: (type: 'linear' | 'radial') => void;
  angle: number;
  onAngleChange: (value: number) => void;
}

export default function GradientSettings({
  className,
  type,
  onTypeChange,
  angle,
  onAngleChange,
}: GradientSettingsProps) {
  const [theme] = useTheme();

  const activeDirection =
    (type === 'linear' &&
      Object.keys(DIRECTIONS).find((direction) => DIRECTIONS[direction] === angle)) ||
    null;

  return (
    <div className={cx(classes.settings, classes[theme], className)}>
      <div className={classes.field}>
        <div className={classes.label}>Gradient type</div>
        <Tabs
          data={[
            { value: 'linear', label: 'Linear' },
            { value: 'radial', label: 'Radial' },
          ]}
          onTabChange={onTypeChange}
          active={type}
        />
      </div>

      {type === 'linear' && (
        <>
          <div className={classes.field}>
            <div className={classes.label}>Gradient direction</div>
            <DirectionPicker
              value={activeDirection}
              onChange={(direction) => onAngleChange(DIRECTIONS[direction])}
            />
          </div>

          <div className={classes.field}>
            <div className={classes.label}>Gradient angle, deg</div>
            <SliderInput value={angle} onChange={onAngleChange} min={0} max={360} trackSize={133} />
          </div>
        </>
      )}
    </div>
  );
}
