import oc from 'open-color';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Triangle from '../Triangle/Triangle';
import directions from '../directions';
import classes from './DirectionPicker.styles.less';

function getSize(direction) {
  switch (direction) {
    case 'top':
    case 'bottom':
      return { width: 26, height: 16 };

    case 'right':
    case 'left':
      return { width: 16, height: 26 };

    case 'top-right':
    case 'top-left':
    case 'bottom-left':
    case 'bottom-right':
      return { width: 20, height: 20 };

    default:
      return null;
  }
}

export default function DirectionPicker({ className, value, onChange }) {
  const contols = directions.map(direction => (
    <button
      type="button"
      onClick={() => onChange(direction)}
      className={cx(classes.control, { [classes.active]: value === direction })}
      key={direction}
    >
      <Triangle
        color={value === direction ? oc.violet[5] : oc.gray[6]}
        direction={direction}
        {...getSize(direction)}
      />
    </button>
  ));

  contols.splice(4, 0, <div className={classes.blank} key="blank" />);

  return <div className={cx(classes.wrapper, className)}>{contols}</div>;
}

DirectionPicker.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOf(directions).isRequired,
};
