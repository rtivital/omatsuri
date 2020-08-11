import React from 'react';
import PropTypes from 'prop-types';
import Triangle from '../Triangle/Triangle';
import Background from '../../../components/Background/Background';
import directions from '../directions';
import classes from './TrianglePreview.styles.less';

export default function TrianglePreview({ values }) {
  return (
    <Background className={classes.wrapper}>
      <div className={classes.overlay} />
      <div className={classes.background}>
        <Triangle {...values} />
      </div>
    </Background>
  );
}

TrianglePreview.propTypes = {
  values: PropTypes.shape({
    direction: PropTypes.oneOf(directions).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};
