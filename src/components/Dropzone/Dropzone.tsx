import React, { useLayoutEffect, useState, useRef } from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './Dropzone.styles.less';

const preventDefault = (event) => event.preventDefault();

interface DropzoneProps {
  onDrop: (files: File[]) => void;
  accepts?: string[] | '*';
}

export default function Dropzone({ onDrop, accepts = ['image/svg+xml'] }: DropzoneProps) {
  const [theme] = useTheme();
  const [dragOver, setDragOver] = useState(false);
  const dragLeaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const allowAll = accepts === '*';
  const acceptedTypes = allowAll ? [] : accepts;

  const onDragOver = () => {
    if (dragLeaveTimeout.current) {
      clearTimeout(dragLeaveTimeout.current);
    }
    setDragOver(true);
  };

  const onDragLeave = () => {
    if (dragLeaveTimeout.current) {
      clearTimeout(dragLeaveTimeout.current);
    }
    dragLeaveTimeout.current = setTimeout(() => {
      setDragOver(false);
    }, 20);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (dragLeaveTimeout.current) {
      clearTimeout(dragLeaveTimeout.current);
    }
    setDragOver(false);
    onDrop(
      [...event.dataTransfer.files].filter((file) => allowAll || acceptedTypes.includes(file.type))
    );
  };

  useLayoutEffect(() => {
    document.addEventListener('dragover', preventDefault, false);
    document.addEventListener('drop', handleDrop, false);
    document.addEventListener('dragover', onDragOver, false);
    document.addEventListener('dragleave', onDragLeave, false);

    return () => {
      document.removeEventListener('dragover', preventDefault, false);
      document.removeEventListener('drop', handleDrop, false);
      document.removeEventListener('dragover', onDragOver, false);
      document.removeEventListener('dragleave', onDragLeave, false);
    };
  }, []);

  return dragOver ? (
    <div className={cx(classes.wrapper, classes[theme])}>
      <h1 className={classes.title}>Drop files to browser window</h1>
    </div>
  ) : null;
}
