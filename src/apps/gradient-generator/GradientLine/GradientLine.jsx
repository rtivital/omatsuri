import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 } from 'uuid';
import { generateGradientColorValues } from '../generate-gradient-value';
import getRandomColor from './get-random-color';
import ColorStop from './ColorStop/ColorStop';
import classes from './GradientLine.styles.less';

export default function GradientLine({ values, handlers, className }) {
  const [lineProps, setLineProps] = useState(null);
  const parsedLineRect = useMemo(() => (lineProps ? JSON.parse(lineProps) : null), [lineProps]);
  const gradient = `linear-gradient(to right, ${generateGradientColorValues(values)})`;

  const handleColorAdd = (event) => {
    const rect = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const position = parseInt((clickPosition / rect.width) * 100, 10);
    handlers.setState(
      values
        .concat({ color: getRandomColor(), position, opacity: 1, key: v4() })
        .sort((a, b) => a.position - b.position)
    );
  };

  const colorStops = values.map((value, index) => (
    <ColorStop
      key={value.key}
      value={value}
      handlers={handlers}
      lineRect={parsedLineRect}
      index={index}
    />
  ));

  return (
    <div className={cx(classes.gradientLine, className)}>
      <div className={classes.lineWrapper}>
        <div
          className={classes.line}
          style={{ backgroundImage: gradient }}
          onClick={handleColorAdd}
          ref={(node) => node && setLineProps(JSON.stringify(node.getBoundingClientRect()))}
        />
      </div>
      {colorStops}
    </div>
  );
}

GradientLine.propTypes = {
  className: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,

  handlers: PropTypes.shape({
    setState: PropTypes.func.isRequired,
  }).isRequired,
};
