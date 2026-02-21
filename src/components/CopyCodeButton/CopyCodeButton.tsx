import React from 'react';
import Button from '../Button/Button';

interface CopyCodeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  copied: boolean;
}

export default function CopyCodeButton({ copied, ...others }: CopyCodeButtonProps) {
  return (
    <Button type="button" theme={copied ? 'success' : 'primary'} {...others}>
      {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    </Button>
  );
}
