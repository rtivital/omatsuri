import React from 'react';
import Highlight from '../../../components/Hightlight/Highlight';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import classes from './Output.styles.less';

export default function Output({ singleFileProgress, miltiFileProgress }) {
  const files = Object.keys(miltiFileProgress);
  const filesAmount = Object.keys(miltiFileProgress).length;

  if (!singleFileProgress.content && filesAmount === 0) {
    return null;
  }

  if (filesAmount > 0) {
    const items = files.map((fileKey, index) => (
      <Background key={index} className={classes.wrapper}>
        <div className={classes.preview}>
          <SettingsLabel>Preview</SettingsLabel>
          <div dangerouslySetInnerHTML={{ __html: miltiFileProgress[fileKey].content }} />
        </div>

        <div className={classes.result}>
          <SettingsLabel>Compressed Code</SettingsLabel>
          <code className={classes.code}>{miltiFileProgress[fileKey].content || ''}</code>
        </div>
      </Background>
    ));

    return items;
  }

  return <div>Output</div>;
}
