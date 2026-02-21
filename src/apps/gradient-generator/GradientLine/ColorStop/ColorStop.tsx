import React, { useRef } from 'react';
import cx from 'clsx';
import classes from './ColorStop.styles.less';

interface GradientValue {
  key: string;
  color: string;
  position: number;
  opacity: number;
}

interface ColorStopProps {
  className?: string;
  value: GradientValue;
  values: GradientValue[];
  handlers: {
    setState: (values: GradientValue[]) => void;
    remove: (index: number) => void;
  };
  lineRect: { left: number; top: number; width: number } | null;
  index: number;
}

export default function ColorStop({
  className,
  value,
  values,
  handlers,
  lineRect,
  index,
}: ColorStopProps) {
  const handle = useRef<HTMLDivElement | null>(null);
  const start = useRef(0);
  const offset = useRef(0);

  const removeColorStop = () => handlers.remove(index);

  const handleChange = (val) => {
    if (!lineRect) {
      return;
    }
    let left = val;
    const { width } = lineRect;
    let position = 0;
    if (left < 0) {
      left = 0;
    }
    if (left > width) {
      left = width;
    }
    position = Math.round((left / width) * 100);

    const newValues = [...values];
    newValues[index] = { ...newValues[index], position };
    handlers.setState(newValues.sort((a, b) => a.position - b.position));
  };

  const handleDrag = (event) => {
    event.preventDefault();
    const verticalPosition = event.clientY - lineRect.top;

    if (values.length > 2 && (verticalPosition < -100 || verticalPosition > 120)) {
      document.removeEventListener('mousemove', handleDrag);
      removeColorStop();
    } else {
      handleChange(event.clientX + start.current - offset.current);
    }
  };

  const handleDragEnd = (event) => {
    event.preventDefault();
    start.current = value.position;

    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    if (!lineRect) {
      return;
    }
    const clientPos = event.clientX;

    start.current = clientPos - lineRect.left;
    offset.current = clientPos;

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);

    handleChange(clientPos - lineRect.left);
  };

  return (
    <div className={cx(classes.colorStop, className)} style={{ left: `${value.position}%` }}>
      <div
        ref={handle}
        className={classes.handle}
        onMouseDown={handleMouseDown}
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        role="button"
        tabIndex={0}
      >
        <div className={classes.handleColor} style={{ backgroundColor: value.color }} />
      </div>
    </div>
  );
}
