import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './ColorStop.styles.less';

export default function ColorStop({ className, value, handlers, lineRect, index }) {
  const handle = useRef(null);
  const start = useRef({});
  const offset = useRef({});

  const handleChange = (val) => {
    let left = val;
    const { width } = lineRect;
    let dx = 0;
    if (left < 0) left = 0;
    if (left > width) left = width;
    dx = (left / width) * 100;
    handlers.setItemProp(index, 'position', parseInt(dx, 10));
  };

  const handleDrag = (event) => {
    event.preventDefault();
    handleChange(event.clientX + start.current - offset.current);
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
      >
        <div className={classes.handleColor} style={{ backgroundColor: value.color }} />
      </div>
    </div>
  );
}

ColorStop.propTypes = {
  className: PropTypes.string,

  index: PropTypes.number.isRequired,

  value: PropTypes.shape({
    color: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,

  handlers: PropTypes.shape({
    setItemProp: PropTypes.func.isRequired,
  }).isRequired,

  lineRect: PropTypes.shape({
    left: PropTypes.number,
    width: PropTypes.number,
  }),
};
