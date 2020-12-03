import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Highlight from '../../../components/Highlight/Highlight';
import Background from '../../../components/Background/Background';
import generateGradientValue from '../generate-gradient-value';
import classes from './GradientCode.styles.less';

export default function GradientCode({ className, values, angle, type }) {
  const gradient = generateGradientValue({ values, angle, type });

  return (
    <Background className={cx(classes.gradientCode, className)}>
      <div className={classes.section}>
        <div className={classes.title}>CSS</div>
        <Highlight>{`background-image: ${gradient};`}</Highlight>
      </div>

      <div className={classes.section}>
        <div className={classes.title}>JavaScript</div>
        <Highlight>{`backgroundImage: '${gradient}',`}</Highlight>
      </div>
    </Background>
  );
}

GradientCode.propTypes = {
  className: PropTypes.string,
  angle: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['radial', 'linear']).isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
