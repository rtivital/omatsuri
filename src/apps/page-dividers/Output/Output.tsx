import React from 'react';
import Button from '../../../components/Button/Button';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Highlight/Highlight';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import generateExample from './generate-example';
import * as assets from '../assets';
import classes from './Output.styles.less';

export default function Output({ values }) {
  return (
    <Background className={classes.wrapper}>
      <div className={classes.section}>
        <div className={classes.header}>
          <SettingsLabel className={classes.title}>HTML code</SettingsLabel>
          <Button component="a" href={assets[values.type]} download>
            Download unstyled svg
          </Button>
        </div>
        <Highlight>{generateExample('html', values)}</Highlight>
      </div>

      <div className={classes.section}>
        <SettingsLabel>JSX code</SettingsLabel>
        <Highlight>{generateExample('jsx', values)}</Highlight>
      </div>
    </Background>
  );
}
