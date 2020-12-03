import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import directions from '../directions';
import Chevron from './Chevron';
import classes from './DirectionPicker.styles.less';

export default function DirectionPicker({ className, value, onChange }) {
  const contols = directions.map((direction) => (
    <button
      type="button"
      onClick={() => onChange(direction)}
      className={cx(classes.control, { [classes.active]: value === direction })}
      key={direction}
    >
      <Chevron direction={direction} />
    </button>
  ));

  contols.splice(4, 0, <div className={classes.blank} key="blank" />);

  return <div className={cx(classes.wrapper, className)}>{contols}</div>;
}

DirectionPicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOf(directions),
};
