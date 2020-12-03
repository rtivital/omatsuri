/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './Slider.styles.less';

function getClientPosition(e) {
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
}) {
  const container = useRef(null);
  const handle = useRef(null);
  const start = useRef({});
  const offset = useRef({});

  function getPosition() {
    let left = ((value - min) / (max - min)) * 100;
    if (left > 100) left = 100;
    if (left < 0) left = 0;
    return left;
  }

  function change(val) {
    let left = val;
    const { width } = container.current.getBoundingClientRect();
    let dx = 0;
    if (left < 0) left = 0;
    if (left > width) left = width;
    dx = (left / width) * (max - min);
    onChange((dx !== 0 ? parseInt(dx / step, 10) * step : 0) + min);
  }

  function getPos(e) {
    return getClientPosition(e).x + start.current.x - offset.current.x;
  }

  function handleDrag(e) {
    e.preventDefault();
    change(getPos(e));
  }

  function handleDragEnd(e) {
    e.preventDefault();
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);

    document.removeEventListener('touchmove', handleDrag, {
      passive: false,
    });
    document.removeEventListener('touchend', handleDragEnd);
    document.removeEventListener('touchcancel', handleDragEnd);
  }

  function handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const dom = handle.current;
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
    document.addEventListener('touchmove', handleDrag, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);
  }

  function handleTrackMouseDown(e) {
    e.preventDefault();
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
    document.addEventListener('touchmove', handleDrag, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);

    change(clientPos.x - rect.left);
  }

  const position = getPosition();

  return (
    <div
      ref={container}
      className={classes.track}
      onTouchStart={handleTrackMouseDown}
      onMouseDown={handleTrackMouseDown}
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
      >
        <div className={classes.thumb} />
      </div>
    </div>
  );
}

Slider.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  trackSize: PropTypes.number,
};
