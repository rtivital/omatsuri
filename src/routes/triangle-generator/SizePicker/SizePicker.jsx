import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../components/Tabs/Tabs';
import classes from './SizePicker.styles.less';

export default function SizePicker({ setPredefinedSize, activePredefinedSize, predefinedSizes }) {
  return (
    <div>
      <div className={classes.title}>Predefined sizes</div>
      <Tabs
        data={Object.keys(predefinedSizes).map(value => ({ value, label: value }))}
        onTabChange={setPredefinedSize}
        active={activePredefinedSize}
      />
    </div>
  );
}

SizePicker.propTypes = {
  setPredefinedSize: PropTypes.func.isRequired,
  activePredefinedSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  predefinedSizes: PropTypes.object.isRequired,
};
