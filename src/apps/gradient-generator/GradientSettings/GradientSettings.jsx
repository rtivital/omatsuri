import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Tabs from '../../../components/Tabs/Tabs';
import classes from './GradientSettings.styles.less';

export default function GradientSettings({ className, type, onTypeChange, angle, onAngleChange }) {
  return (
    <div className={cx(classes.settings, className)}>
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
        <div className={classes.field}>
          <div className={classes.label}>Gradient angle, deg</div>
          <SliderInput value={angle} onChange={onAngleChange} min={0} max={360} />
        </div>
      )}
    </div>
  );
}

GradientSettings.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['linear', 'radial']).isRequired,
  onTypeChange: PropTypes.func.isRequired,
  angle: PropTypes.number,
  onAngleChange: PropTypes.func.isRequired,
};
