import React, { useState, useEffect } from 'react';
import Highlight from '../../components/Highlight/Highlight';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import DropPlaceholder from '../../components/DropPlaceholder/DropPlaceholder';
import Dropzone from '../../components/Dropzone/Dropzone';
import B64Worker from '../../workers/b64.worker';
import useLocaStorage from '../../hooks/use-local-storage';
import useDocumentTitle from '../../hooks/use-document-title';
import classes from './B64Encoding.styles.less';

const b64 = new B64Worker();

function generateCssExample(content) {
  return `.element {\n  background-image: url(${content});\n}`;
}

export default function B64Encoding() {
  useDocumentTitle('Base64 encoding');

  const ls = useLocaStorage({ key: '@omatsuri/b64-encoding', delay: 500 });
  const transmittedValue = useLocaStorage({ key: '@omatsuri/conversion-after-compression/b64' });
  const [result, setResult] = useState({ loading: false, error: null, content: ls.retrieve() });

  const handleMessage = (event) => {
    const error = event.data instanceof Error;
    if (!error) {
      ls.save(event.data);
    }
    setResult({
      error,
      loading: false,
      content: error ? null : event.data,
    });
  };

  const postMessage = (file) => b64.postMessage({ file });

  useEffect(() => {
    b64.addEventListener('message', handleMessage);
    const transmittedContent = transmittedValue.retrieveAndClean();

    if (transmittedContent) {
      b64.postMessage({ content: transmittedContent });
    }

    return () => b64.removeEventListener('message', handleMessage);
  }, []);

  const handleFilesDrop = (files) => {
    if (files.length > 0) {
      postMessage(files[0]);
    }
  };

  return (
    <>
      <Dropzone accepts="*" onDrop={handleFilesDrop} />
      <DropPlaceholder onFileAdd={(file) => postMessage(file)} accepts="*">
        Drop file to browser window to convert it to base64 format
      </DropPlaceholder>
      {result.content && (
        <Background className={classes.wrapper}>
          <div className={classes.section}>
            <SettingsLabel>Raw base 64</SettingsLabel>
            <Highlight>{result.content}</Highlight>
          </div>

          <div className={classes.section}>
            <SettingsLabel>Usage with css</SettingsLabel>
            <Highlight>{generateCssExample(result.content)}</Highlight>
          </div>
        </Background>
      )}
    </>
  );
}
