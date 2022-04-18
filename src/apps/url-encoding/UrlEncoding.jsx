import React, { useState } from 'react';
import { useDocumentTitle, useLocalStorage, useClipboard } from 'xooks';
import classes from './UrlEncoding.styles.less';
import Input from '../../components/Input/Input';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import Button from '../../components/Button/Button';
import CopyCodeButton from '../../components/CopyCodeButton/CopyCodeButton';

export default function UrlEncoding() {
  useDocumentTitle('URL encoding');

  const lsDecoded = useLocalStorage({ key: '@omatsuri/url-encoding/decoded', delay: 200 });
  const lsEncoded = useLocalStorage({ key: '@omatsuri/url-encoding/encoded', delay: 200 });
  const [decoded, setDecoded] = useState(lsDecoded.retrieve() || '');
  const [encoded, setEncoded] = useState(lsDecoded.retrieve() || '');
  const { copied: decodedCopied, copy: decodedCopy } = useClipboard();
  const { copied: encodedCopied, copy: encodedCopy } = useClipboard();

  const handleDecodedChange = (event) => {
    setDecoded(event.target.value);
    lsDecoded.save(event.target.value);
  };

  const handleEncodedChange = (event) => {
    setEncoded(event.target.value);
    lsEncoded.save(event.target.value);
  };

  return (
    <>
      <Background className={classes.wrapper}>
        <div className={classes.header}>
          <SettingsLabel className={classes.title}>Decoded URL</SettingsLabel>
          <Button
            onClick={() => handleEncodedChange({ target: { value: encodeURIComponent(decoded) } })}
          >
            Encode
          </Button>
        </div>
        <div className={classes.textareawrapper}>
          <Input
            className={classes.textarea}
            component="textarea"
            value={decoded}
            onChange={handleDecodedChange}
            placeholder="Decoded URL"
          />
          <CopyCodeButton
            copied={decodedCopied}
            onClick={() => decodedCopy(decoded)}
            className={classes.copy}
          />
        </div>
      </Background>
      <Background className={classes.wrapper}>
        <div className={classes.header}>
          <SettingsLabel className={classes.title}>Encoded URL</SettingsLabel>
          <Button
            onClick={() => handleDecodedChange({ target: { value: decodeURIComponent(encoded) } })}
          >
            Decode
          </Button>
        </div>
        <div className={classes.textareawrapper}>
          <Input
            className={classes.textarea}
            component="textarea"
            value={encoded}
            onChange={handleEncodedChange}
            placeholder="Encoded URL"
          />
          <CopyCodeButton
            copied={encodedCopied}
            onClick={() => encodedCopy(encoded)}
            className={classes.copy}
          />
        </div>
      </Background>
    </>
  );
}
