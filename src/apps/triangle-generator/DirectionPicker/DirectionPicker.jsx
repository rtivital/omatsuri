import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import directions from '../directions';
import classes from './DirectionPicker.styles.less';

import bottom from '../../../assets/chervons/chevron-down.svg';
import bottomLeft from '../../../assets/chervons/chevron-down-left.svg';
import bottomRight from '../../../assets/chervons/chevron-down-right.svg';
import right from '../../../assets/chervons/chevron-right.svg';
import left from '../../../assets/chervons/chevron-left.svg';
import topLeft from '../../../assets/chervons/chevron-top-left.svg';
import topRight from '../../../assets/chervons/chevron-top-right.svg';
import top from '../../../assets/chervons/chevron-top.svg';

const icons = {
  top,
  bottom,
  right,
  left,
  'bottom-right': bottomRight,
  'bottom-left': bottomLeft,
  'top-right': topRight,
  'top-left': topLeft,
};

function isAngle(direction) {
  switch (direction) {
    case 'top-right':
    case 'top-left':
    case 'bottom-left':
    case 'bottom-right':
      return true;

    default:
      return false;
  }
}

export default function DirectionPicker({ className, value, onChange }) {
  const contols = directions.map((direction) => (
    <button
      type="button"
      onClick={() => onChange(direction)}
      className={cx(classes.control, { [classes.active]: value === direction })}
      key={direction}
    >
      <img
        className={cx(classes.icon, { [classes.angle]: isAngle(direction) })}
        src={icons[direction]}
        alt=""
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
