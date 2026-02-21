import React from 'react';
import cx from 'clsx';
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
