import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useClipboard } from 'xooks';
import classes from './CursorControl.styles.less';

export default function CursorControl({ className, value }) {
  const clipboard = useClipboard();
  return (
    <button
      className={cx(classes.control, { [classes.active]: clipboard.copied }, className)}
      type="button"
      onClick={() => clipboard.copy(value)}
      style={{ cursor: value }}
      title="Click to copy cursor value"
    >
      {value}
    </button>
  );
}

CursorControl.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};
