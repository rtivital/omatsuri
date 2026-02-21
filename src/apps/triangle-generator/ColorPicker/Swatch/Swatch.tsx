import React from 'react';
import cx from 'clsx';
import classes from './Swatch.styles.less';

export default function Swatch({ className, value, ...others }) {
  return (
    <button
      type="button"
      className={cx(classes.swatch, className)}
      style={{ backgroundColor: value }}
      {...others}
    />
  );
}
