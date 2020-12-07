import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';
import Background from '../../../components/Background/Background';
import classes from './Preview.styles.less';

export default function Preview({ text }) {
  const [theme] = useTheme();

  const nodes = text
    .split('\n')
    .filter(Boolean)
    .map((node, index) => <p key={index}>{node}</p>);

  return <Background className={cx(classes.wrapper, classes[theme])}>{nodes}</Background>;
}

Preview.propTypes = {
  text: PropTypes.string.isRequired,
};
