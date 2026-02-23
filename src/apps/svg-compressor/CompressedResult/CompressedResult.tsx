import React from 'react';
import cx from 'clsx';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useClipboard } from '@hooks';
import { useTheme } from '../../../ThemeProvider';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import CopyCodeButton from '../../../components/CopyCodeButton/CopyCodeButton';
import formatFileName from '../format-file-name';
import classes from './CompressedResult.styles.module.css';

export default function CompressedResult({ content, fileKey }) {
  const [theme] = useTheme();
  const navigate = useNavigate();
  const { copied, copy } = useClipboard();

  const convertToJsx = () => {
    localStorage.setItem('@omatsuri/conversion-after-compression/jsx', JSON.stringify(content));
    navigate('/svg-to-jsx');
  };

  const convertToB64 = () => {
    localStorage.setItem('@omatsuri/conversion-after-compression/b64', JSON.stringify(content));
    navigate('/b64-encoding');
  };

  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.preview}>
        <SettingsLabel>Preview</SettingsLabel>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className={classes.name}>{formatFileName(fileKey)}</div>
        <div className={classes.controls}>
          <CopyCodeButton
            copied={copied}
            onClick={() => copy(content)}
            className={classes.control}
          />
          <Button
            className={classes.control}
            component="a"
            variant="default"
            color="gray"
            download={fileKey}
            href={`data:image/svg+xml;charset=utf-8;base64,${btoa(content)}`}
          >
            download
          </Button>
          <div className={classes.controlsLabel}>or convert to</div>
          <div className={classes.controlsGroup}>
            <Button
              className={classes.controlsGroupItem}
              variant="light"
              color="blue"
              onClick={convertToJsx}
            >
              jsx
            </Button>
            <Button
              className={classes.controlsGroupItem}
              variant="light"
              color="red"
              onClick={convertToB64}
            >
              base64
            </Button>
          </div>
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
