import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Container.styles.less';

export default function Container({ className, ...others }) {
  return <div className={cx(classes.container, className)} {...others} />;
}

Container.propTypes = {
  className: PropTypes.string,
};
