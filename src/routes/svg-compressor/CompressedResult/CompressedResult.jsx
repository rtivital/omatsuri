import React from 'react';
import PropTypes from 'prop-types';
import useClipboard from '../../../hooks/use-clipboard';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import CopyCodeButton from '../../../components/CopyCodeButton/CopyCodeButton';
import classes from './CompressedResult.styles.less';

function formatFileName(key) {
  if (typeof key !== 'string') {
    return null;
  }

  if (key !== 'input_file') {
    return key
      .split('_')
      .slice(1)
      .join('_');
  }

  return 'from input';
}

export default function CompressedResult({ content, fileKey }) {
  const { copied, copy } = useClipboard();

  return (
    <Background className={classes.wrapper}>
      <div className={classes.preview}>
        <SettingsLabel>Preview</SettingsLabel>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className={classes.name}>{formatFileName(fileKey)}</div>
      </div>

      <div className={classes.result}>
        <SettingsLabel>Compressed Code</SettingsLabel>
        <div className={classes.codeContainer}>
          <CopyCodeButton copied={copied} onClick={() => copy(content)} />
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
