import React, { useState, useEffect } from 'react';
import Background from '../../components/Background/Background';
import Dropzone from '../../components/Dropzone/Dropzone';
import B64Worker from '../../workers/b64.worker';
import useDocumentTitle from '../../hooks/use-document-title';

const b64 = new B64Worker();

export default function B64Encoding() {
  useDocumentTitle('Base64 encoding');
  const [result, setResult] = useState({ loading: false, error: null, content: null });

  const handleMessage = (event) => {
    const error = event.data instanceof Error;
    setResult({
      error,
      loading: false,
      content: error ? null : event.data,
    });
  };

  const postMessage = (file) => b64.postMessage({ file });

  useEffect(() => {
    b64.addEventListener('message', handleMessage);
    return () => b64.removeEventListener('message', handleMessage);
  }, []);

  const handleFilesDrop = (files) => {
    if (files.length > 0) {
      postMessage(files[0]);
    }
  };

  return (
    <Background>
      <Dropzone accepts="*" onDrop={handleFilesDrop} />
      {result.content}
    </Background>
  );
}
