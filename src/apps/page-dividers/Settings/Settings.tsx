import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../../ThemeProvider';
import Tabs from '../../../components/Tabs/Tabs';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Select from '../../../components/Select/Select';
import HexInput from '../../../components/HexInput/HexInput';
import Background from '../../../components/Background/Background';
import { shapes } from '../Shape/Shape';
import classes from './Settings.styles.less';

const data = Object.keys(shapes).map((shape) => ({
  value: shape,
  label: (shape.charAt(0).toUpperCase() + shape.slice(1)).replace('_', ' '),
}));

const positionsData = ['top', 'bottom'].map((position) => ({
  value: position,
  label: position.charAt(0).toUpperCase() + position.slice(1),
}));

const directionsData = ['normal', 'reverse'].map((direction) => ({
  value: direction,
  label: direction.charAt(0).toUpperCase() + direction.slice(1),
}));

export default function Settings({ values, handlers }) {
  const [theme] = useTheme();

  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.inner}>
        <div className={classes.group}>
          <div className={classes.input}>
            <Select
              data={data}
              value={values.type}
              onChange={handlers.onTypeChange}
              id="shape-select"
              label="Shape type"
            />
          </div>
          <div className={classes.input}>
            <div className={classes.label}>Position</div>
            <Tabs
              data={positionsData}
              onTabChange={handlers.onPositionChange}
              active={values.position}
            />
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes.input}>
            <div className={classes.label}>Color</div>
            <HexInput
              className={classes.hexInput}
              value={values.color}
              onChange={handlers.onColorChange}
            />
          </div>
          <div className={classes.input}>
            <div className={classes.label}>Direction</div>
            <Tabs
              data={directionsData}
              onTabChange={handlers.onDirectionChange}
              active={values.direction}
            />
          </div>
        </div>

        <div className={classes.group}>
          <div className={classes.input}>
            <div className={classes.label}>Width, %</div>
            <SliderInput
              value={values.width}
              onChange={handlers.onWidthChange}
              min={100}
              max={400}
            />
          </div>

          <div className={classes.input}>
            <div className={classes.label}>Height, px</div>
            <SliderInput
              value={values.height}
              onChange={handlers.onHeightChange}
              min={0}
              max={500}
            />
          </div>
        </div>
      </div>
    </Background>
  );
}
