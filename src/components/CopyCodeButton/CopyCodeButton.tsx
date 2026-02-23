import React from 'react';
import { Button } from '@mantine/core';

interface CopyCodeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  copied: boolean;
}

export default function CopyCodeButton({ copied, ...others }: CopyCodeButtonProps) {
  return (
    <Button type="button" variant="light" color={copied ? 'green' : 'violet'} {...others}>
      {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    </Button>
  );
}
