import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './SettingsLabel.styles.less';

export default function SettingsLabel({ className, children }) {
  return <h2 className={cx(classes.label, className)}>{children}</h2>;
}

SettingsLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};
