import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './ColorStop.styles.less';

export default function ColorStop({ className, value, values, handlers, lineRect, index }) {
  const handle = useRef(null);
  const start = useRef({});
  const offset = useRef({});

  const removeColorStop = () => handlers.remove(index);

  const handleChange = (val) => {
    let left = val;
    const { width } = lineRect;
    let position = 0;
    if (left < 0) left = 0;
    if (left > width) left = width;
    position = parseInt((left / width) * 100, 10);

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

  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,

  value: PropTypes.shape({
    color: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    opacity: PropTypes.number.isRequired,
  }).isRequired,

  handlers: PropTypes.shape({
    setState: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,

  lineRect: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
};
