import React from 'react';
import { useDocumentTitle, useListState } from 'xooks';
import Background from '../../components/Background/Background';
import GradientLine from './GradientLine/GradientLine';
import classes from './GradientGenerator.styles.less';

const DEFAULT_VALUES = [
  { color: '#ed6ea0', position: 0, opacity: 1 },
  { color: '#ec8c69', position: 100, opacity: 1 },
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
