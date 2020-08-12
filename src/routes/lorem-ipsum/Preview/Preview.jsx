import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../../components/Background/Background';
import classes from './Preview.styles.less';

export default function Preview({ text }) {
  const nodes = text
    .split('\n')
    .filter(Boolean)
    .map(node => <p key={node}>{node}</p>);

  return <Background className={classes.wrapper}>{nodes}</Background>;
}

Preview.propTypes = {
  text: PropTypes.string.isRequired,
};
