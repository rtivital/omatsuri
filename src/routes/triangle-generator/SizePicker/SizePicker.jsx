import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../components/Tabs/Tabs';
import SliderInput from '../../../components/SliderInput/SliderInput';
import classes from './SizePicker.styles.less';

export default function SizePicker({
  setPredefinedSize,
  activePredefinedSize,
  predefinedSizes,
  value,
  onWidthChange,
  onHeightChange,
}) {
  return (
    <div>
      <div className={classes.title}>Predefined sizes</div>
      <Tabs
        data={Object.keys(predefinedSizes).map(val => ({ value: val, label: val }))}
        onTabChange={setPredefinedSize}
        active={activePredefinedSize}
      />

      <div className={classes.field}>
        <div className={classes.title}>Width</div>
        <SliderInput value={value.width} onChange={onWidthChange} min={1} max={200} />
      </div>

      <div className={classes.field}>
        <div className={classes.title}>Height</div>
        <SliderInput value={value.height} onChange={onHeightChange} min={1} max={200} />
      </div>
    </div>
  );
}

SizePicker.propTypes = {
  setPredefinedSize: PropTypes.func.isRequired,
  activePredefinedSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  predefinedSizes: PropTypes.object.isRequired,
  value: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  onWidthChange: PropTypes.func.isRequired,
  onHeightChange: PropTypes.func.isRequired,
};
