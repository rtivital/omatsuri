import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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

Swatch.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};
