import React from 'react';
import PropTypes from 'prop-types';
import useClipboard from '../../../hooks/use-clipboard';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import CopyCodeButton from '../../../components/CopyCodeButton/CopyCodeButton';
import formatFileName from '../format-file-name';
import classes from './CompressedResult.styles.less';

export default function CompressedResult({ content, fileKey }) {
  const { copied, copy } = useClipboard();

  return (
    <Background className={classes.wrapper}>
      <div className={classes.preview}>
        <SettingsLabel>Preview</SettingsLabel>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className={classes.name}>{formatFileName(fileKey)}</div>
        <div className={classes.controls}>
          <CopyCodeButton copied={copied} onClick={() => copy(content)} />
        </div>
      </div>

      <div className={classes.result}>
        <SettingsLabel>Compressed Code</SettingsLabel>

        <div className={classes.codeContainer}>
          <code className={classes.code}>{content || ''}</code>
        </div>
      </div>
    </Background>
  );
}

CompressedResult.propTypes = {
  content: PropTypes.string,
  fileKey: PropTypes.string,
};
