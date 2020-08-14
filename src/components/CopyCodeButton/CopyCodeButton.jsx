import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

export default function CopyCodeButton({ copied, ...others }) {
  return (
    <Button type="button" theme={copied ? 'success' : 'primary'} {...others}>
      {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    </Button>
  );
}

CopyCodeButton.propTypes = {
  className: PropTypes.string,
  copied: PropTypes.bool.isRequired,
};
