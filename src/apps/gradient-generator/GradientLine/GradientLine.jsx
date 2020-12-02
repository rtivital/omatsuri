import React from 'react';
import PropTypes from 'prop-types';
import { generateGradientColorValues } from '../generate-gradient-value';
import getRandomColor from './get-random-color';
import classes from './GradientLine.styles.less';

export default function GradientLine({ values, handlers }) {
  const gradient = `linear-gradient(to right, ${generateGradientColorValues(values)})`;

  const handleColorAdd = (event) => {
    const rect = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const position = parseInt((clickPosition / rect.width) * 100, 10);
    handlers.setState(
      values
        .concat({ color: getRandomColor(), position, opacity: 1 })
        .sort((a, b) => a.position - b.position)
    );
  };

  return (
    <div>
      <div
        className={classes.line}
        style={{ backgroundImage: gradient }}
        onClick={handleColorAdd}
      />
    </div>
  );
}

GradientLine.propTypes = {
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
