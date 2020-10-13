import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Keycap.styles.less';

export default function Keycap({ value, className }) {
  return (
    <div
      className={cx(
        classes.keycap,
        {
          [classes.shift]: value === 'Shift',
          [classes.alt]: value === 'Alt',
          [classes.control]: value === 'Ctrl',
          [classes.meta]: value === 'Cmd',
          [classes.space]: value === ' ',
          [classes.enter]: value === 'Enter',
        },
        className
      )}
    >
      {value}
    </div>
  );
}

Keycap.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};
