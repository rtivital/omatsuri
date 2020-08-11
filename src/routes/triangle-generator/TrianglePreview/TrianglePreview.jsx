import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Triangle from '../Triangle/Triangle';
import Background from '../../../components/Background/Background';
import directions from '../directions';
import classes from './TrianglePreview.styles.less';

export default function TrianglePreview({ values, theme }) {
  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.overlay} />
      <div className={classes.background} />
      <div className={classes.triangle}>
        <Triangle {...values} />
      </div>
    </Background>
  );
}

TrianglePreview.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  values: PropTypes.shape({
    direction: PropTypes.oneOf(directions).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
