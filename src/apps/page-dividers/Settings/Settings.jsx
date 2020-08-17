import React from 'react';
import PropTypes from 'prop-types';
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

export default function Settings({ values, handlers }) {
  return (
    <Background className={classes.wrapper}>
      <div className={classes.inner}>
        <div className={classes.group}>
          <Select
            data={data}
            value={values.type}
            onChange={handlers.onTypeChange}
            id="shape-select"
            label="Shape type"
          />
        </div>
        <div className={classes.group}>
          <div className={classes.label}>Color</div>
          <HexInput value={values.color} onChange={handlers.onColorChange} />
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

Settings.propTypes = {
  values: PropTypes.shape({
    color: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(shapes)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),

  handlers: PropTypes.shape({
    onTypeChange: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    onWidthChange: PropTypes.func.isRequired,
    onHeightChange: PropTypes.func.isRequired,
  }).isRequired,
};
