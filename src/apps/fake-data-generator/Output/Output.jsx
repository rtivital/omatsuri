import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../../components/Background/Background';
import classes from './Output.styles.less';
import generate from '../generator';

export default function Output() {
  return <Background className={classes.wrapper}>{generate('address')}</Background>;
}
