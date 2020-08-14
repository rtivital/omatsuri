import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button/Button';
import classes from './CopyCodeButton.styles.less';

export default function CopyCodeButton({ copied, className, ...others }) {
  return (
    <Button
      type="button"
      className={cx(classes.copy, className)}
      theme={copied ? 'success' : 'primary'}
      {...others}
    >
      {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    </Button>
  );
}

CopyCodeButton.propTypes = {
  className: PropTypes.string,
  copied: PropTypes.bool.isRequired,
};
