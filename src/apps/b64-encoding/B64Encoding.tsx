import React, { useState, useLayoutEffect, useRef } from 'react';
import cx from 'clsx';
import { useDocumentTitle, useLocalStorage } from '@hooks';
import Highlight from '../../components/Highlight/Highlight';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import DropPlaceholder from '../../components/DropPlaceholder/DropPlaceholder';
import Dropzone from '../../components/Dropzone/Dropzone';
import classes from './B64Encoding.styles.less';

function generateCssExample(content: string) {
  return `.element {\n  background-image: url(${content});\n}`;
}

export default function B64Encoding() {
  useDocumentTitle('Base64 encoding');
  const b64 = useRef<Worker | null>(null);
  if (!b64.current) {
    b64.current = new Worker(new URL('../../workers/b64.worker.js', import.meta.url));
  }

  const ls = useLocalStorage({ key: '@omatsuri/b64-encoding', delay: 500 });
  const transmittedValue = useLocalStorage({ key: '@omatsuri/conversion-after-compression/b64' });
  const [result, setResult] = useState<{
    loading: boolean;
    error: boolean | null;
    content: string | null;
  }>({
    loading: false,
    error: null,
    content: ls.retrieve() || null,
  });

  const handleMessage = (event: MessageEvent<any>) => {
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

  const postMessage = (file: File) => {
    b64.current?.postMessage({ file });
  };

  useLayoutEffect(() => {
    const worker = b64.current;
    if (!worker) {
      return undefined;
    }

    worker.addEventListener('message', handleMessage);
    const transmittedContent = transmittedValue.retrieveAndClean();

    if (transmittedContent) {
      worker.postMessage({ content: transmittedContent });
    }

    return () => {
      worker.removeEventListener('message', handleMessage);
      worker.terminate();
    };
  }, []);

  const handleFilesDrop = (files: File[]) => {
    if (files.length > 0) {
      postMessage(files[0]);
    }
  };

  return (
    <>
      <Dropzone accepts="*" onDrop={handleFilesDrop} />
      <DropPlaceholder
        className={cx({ [classes.fullscreenDrop]: !result.content })}
        onFileAdd={(file) => handleFilesDrop([file])}
      >
        Drop a file to the browser window to convert it to base64 format
      </DropPlaceholder>
      {result.content && (
        <Background className={classes.wrapper}>
          <div className={classes.section}>
            <SettingsLabel>Raw base64</SettingsLabel>
            <Highlight>{result.content}</Highlight>
          </div>

          <div className={classes.section}>
            <SettingsLabel>Use as CSS background</SettingsLabel>
            <Highlight>{generateCssExample(result.content)}</Highlight>
          </div>
        </Background>
      )}
    </>
  );
}
