import React from 'react';
import { useDocumentTitle, useListState } from 'xooks';
import { v4 } from 'uuid';
import Background from '../../components/Background/Background';
import GradientLine from './GradientLine/GradientLine';
import classes from './GradientGenerator.styles.less';

const DEFAULT_VALUES = [
  { color: '#ed6ea0', position: 10, opacity: 1, key: v4() },
  { color: '#ec8c69', position: 100, opacity: 1, key: v4() },
];

export default function GradientGenerator() {
  useDocumentTitle('Gradient generator');

  const [values, handlers] = useListState(DEFAULT_VALUES);

  return (
    <Background className={classes.wrapper}>
      <GradientLine values={values} handlers={handlers} />
    </Background>
  );
}
