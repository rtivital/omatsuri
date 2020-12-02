import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { generateGradientColorValues } from '../generate-gradient-value';
import classes from './GradientPreview.styles.less';

export default function GradientPreview({ values, angle, className }) {
  const gradient = `linear-gradient(${angle}deg, ${generateGradientColorValues(values)})`;

  return <div className={cx(classes.preview, className)} style={{ backgroundImage: gradient }} />;
}

GradientPreview.propTypes = {
  className: PropTypes.string,
  angle: PropTypes.number,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
