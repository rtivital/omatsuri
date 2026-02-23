import React from 'react';
import { Button, FileButton, Paper, Text } from '@mantine/core';

interface DropPlaceholderProps {
  className?: string;
  children: React.ReactNode;
  onFileAdd: (file: File) => void;
  accepts?: string;
}

export default function DropPlaceholder({
  className,
  children,
  onFileAdd,
  accepts = 'image/svg+xml',
}: DropPlaceholderProps) {
  return (
    <Paper
      className={className}
      p="lg"
      radius="md"
      withBorder
      bg="linear-gradient(-225deg, var(--mantine-color-violet-0) 0%, var(--mantine-color-cyan-0) 100%)"
      style={{ textAlign: 'center' }}
    >
      <Text fw={700} mb="xs">
        {children} or
      </Text>
      <FileButton accept={accepts} onChange={(file) => file && onFileAdd(file)}>
        {(props) => (
          <Button {...props} variant="white" color="dark">
            Upload file
          </Button>
        )}
      </FileButton>
    </Paper>
  );
}
