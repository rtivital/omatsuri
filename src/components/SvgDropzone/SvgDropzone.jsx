import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './SvgDropzone.styles.less';

const preventDefault = event => event.preventDefault();

export default function SvgDropzone({ onDrop }) {
  const [dragOver, setDragOver] = useState(false);
  const dragLeaveTimeout = useRef();

  const onDragOver = () => {
    clearTimeout(dragLeaveTimeout.current);
    setDragOver(true);
  };

  const onDragLeave = () => {
    clearTimeout(dragLeaveTimeout.current);
    dragLeaveTimeout.current = setTimeout(() => {
      setDragOver(false);
    }, 20);
  };

  const handleDrop = event => {
    event.preventDefault();
    clearTimeout(dragLeaveTimeout.current);
    setDragOver(false);
    onDrop([...event.dataTransfer.files].filter(file => file.type === 'image/svg+xml'));
  };

  useEffect(() => {
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
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Drop svg files to optimize</h1>
    </div>
  ) : null;
}

SvgDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
};
