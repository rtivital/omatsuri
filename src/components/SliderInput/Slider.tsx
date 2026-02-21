import React, { useRef } from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './Slider.styles.less';

interface PointerPosition {
  x: number;
  y: number;
}

interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  trackSize?: number;
}

function getClientPosition(e: any): PointerPosition {
  const { touches } = e;

  if (touches && touches.length) {
    const finger = touches[0];
    return {
      x: finger.clientX,
      y: finger.clientY,
    };
  }

  return {
    x: e.clientX,
    y: e.clientY,
  };
}

export default function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  trackSize = 200,
  onChange,
}: SliderProps) {
  const [theme] = useTheme();
  const container = useRef<HTMLDivElement | null>(null);
  const handle = useRef<HTMLDivElement | null>(null);
  const start = useRef<PointerPosition>({ x: 0, y: 0 });
  const offset = useRef<PointerPosition>({ x: 0, y: 0 });

  function getPosition() {
    let left = ((value - min) / (max - min)) * 100;
    if (left > 100) {
      left = 100;
    }
    if (left < 0) {
      left = 0;
    }
    return left;
  }

  function change(val: number) {
    if (!container.current) {
      return;
    }
    let left = val;
    const { width } = container.current.getBoundingClientRect();
    let dx = 0;
    if (left < 0) {
      left = 0;
    }
    if (left > width) {
      left = width;
    }
    dx = (left / width) * (max - min);
    onChange((dx !== 0 ? Math.round(dx / step) * step : 0) + min);
  }

  function getPos(e: any) {
    return getClientPosition(e).x + start.current.x - offset.current.x;
  }

  function handleDrag(e: any) {
    e.preventDefault();
    change(getPos(e));
  }

  function handleDragEnd(e: any) {
    e.preventDefault();
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);

    document.removeEventListener('touchmove', handleDrag as EventListener);
    document.removeEventListener('touchend', handleDragEnd);
    document.removeEventListener('touchcancel', handleDragEnd);
  }

  function handleMouseDown(e: any) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const dom = handle.current;
    if (!dom) {
      return;
    }
    const clientPos = getClientPosition(e);

    start.current = {
      x: dom.offsetLeft,
      y: dom.offsetTop,
    };

    offset.current = {
      x: clientPos.x,
      y: clientPos.y,
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDrag as EventListener, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);
  }

  function handleTrackMouseDown(e: any) {
    e.preventDefault();
    if (!container.current) {
      return;
    }
    const clientPos = getClientPosition(e);
    const rect = container.current.getBoundingClientRect();

    start.current = {
      x: clientPos.x - rect.left,
      y: clientPos.y - rect.top,
    };

    offset.current = {
      x: clientPos.x,
      y: clientPos.y,
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDrag as EventListener, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);

    change(clientPos.x - rect.left);
  }

  const position = getPosition();

  return (
    <div
      ref={container}
      className={cx(classes.track, classes[theme])}
      onTouchStart={handleTrackMouseDown}
      onMouseDown={handleTrackMouseDown}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          change(value - step);
        }
        if (event.key === 'ArrowRight') {
          change(value + step);
        }
      }}
      role="slider"
      tabIndex={0}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{ width: trackSize }}
    >
      <div className={classes.active} style={{ width: `${position}%` }} />
      <div
        ref={handle}
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          left: `${position}%`,
          top: '50%',
        }}
        onTouchStart={handleMouseDown}
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
        <div className={classes.thumb} />
      </div>
    </div>
  );
}
