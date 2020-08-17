import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Shape, { shapes } from '../Shape/Shape';
import classes from './Preview.styles.less';

export default function Preview({ values }) {
  return (
    <div className={classes.wrapper}>
      <div
        className={cx(classes.shapeWrapper, classes[values.position], classes[values.direction])}
      >
        <Shape
          shape={values.type}
          style={{
            width: `${values.width}%`,
            height: values.height,
            fill: values.color,
          }}
        />
      </div>
    </div>
  );
}

Preview.propTypes = {
  values: PropTypes.shape({
    position: PropTypes.oneOf(['top', 'bottom']).isRequired,
    direction: PropTypes.oneOf(['normal', 'reverse']).isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(shapes)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};
