import React from 'react';
import useDocumentTitle from '../../hooks/use-document-title';
import Background from '../../components/Background/Background';
import classes from './EventsKeycode.styles.less';

export default function EventsKeycode() {
  useDocumentTitle('JavaScript events keycodes');

  return <Background className={classes.wrapper}>EventsKeycode</Background>;
}
