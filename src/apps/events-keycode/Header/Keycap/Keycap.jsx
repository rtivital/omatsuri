import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Keycap.styles.less';

const PREDEFINED_VALUES = {
  ArrowUp: '↑',
  ArrowRight: '→',
  ArrowLeft: '←',
  ArrowDown: '↓',
  Backspace: '⇇',
  Tab: '⇥',
  Escape: 'Esc',
  Enter: null,
  Cmd: null,
};

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
      {value in PREDEFINED_VALUES ? PREDEFINED_VALUES[value] : value}
    </div>
  );
}

Keycap.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};
