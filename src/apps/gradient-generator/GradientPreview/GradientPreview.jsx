import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import generateGradientValue from '../generate-gradient-value';
import classes from './GradientPreview.styles.less';

export default function GradientPreview({ values, angle, className, type }) {
  const gradient = generateGradientValue({ angle, values, type });

  return <div className={cx(classes.preview, className)} style={{ backgroundImage: gradient }} />;
}

GradientPreview.propTypes = {
  className: PropTypes.string,
  angle: PropTypes.number,
  type: PropTypes.oneOf(['linear', 'radial']).isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
