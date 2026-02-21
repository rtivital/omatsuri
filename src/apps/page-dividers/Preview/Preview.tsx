import React from 'react';
import cx from 'clsx';
import Shape from '../Shape/Shape';
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
