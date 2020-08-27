import React from 'react';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import CursorControl from './CursorControl/CursorControl';
import data from './data';
import classes from './CssCursors.styles.less';

export default function CssCursors() {
  const controls = data.map((value) => (
    <CursorControl key={value} value={value} className={classes.control} />
  ));

  return (
    <Background className={classes.wrapper}>
      <SettingsLabel className={classes.title}>
        Css cursor properties – click button to copy property value
      </SettingsLabel>

      <div className={classes.controls}>{controls}</div>
    </Background>
  );
}
