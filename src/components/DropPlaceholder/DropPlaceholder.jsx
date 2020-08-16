import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './DropPlaceholder.styles.less';

export default function DropPlaceholder({ className, children }) {
  return <div className={cx(classes.placeholder, className)}>{children}</div>;
}

DropPlaceholder.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
