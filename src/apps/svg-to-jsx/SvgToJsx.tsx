import React, { useState, useLayoutEffect, useRef } from 'react';
import { useDocumentTitle, useLocalStorage } from '@hooks';
import SvgInput from '../../components/SvgInput/SvgInput';
import processSvgFile from '../../utils/process-svg-file';
import Output from './Output/Output';

export default function SvgToJsx() {
  useDocumentTitle('SVG to JSX');
  const svg2jsx = useRef<Worker | null>(null);
  if (!svg2jsx.current) {
    svg2jsx.current = new Worker(new URL('../../workers/svg-to-jsx.worker.js', import.meta.url));
  }

  const ls = useLocalStorage({ key: '@omatsuri/svg-to-jsx', delay: 1000 });
  const transmittedValue = useLocalStorage({ key: '@omatsuri/conversion-after-compression/jsx' });
  const [value, setValue] = useState(transmittedValue.retrieveAndClean() || ls.retrieve() || '');
  const [result, setResult] = useState({
    loading: false,
    error: null,
    content: null as string | null,
  });

  const handleMessage = (event: MessageEvent) => {
    setResult({ loading: false, error: event.data.error, content: event.data.code });
  };

  const postMessage = (text: string) => {
    svg2jsx.current?.postMessage({ content: text });
  };

  useLayoutEffect(() => {
    const worker = svg2jsx.current;
    if (!worker) {
      return undefined;
    }

    worker.addEventListener('message', handleMessage);

    if (value.trim().length > 0) {
      setResult({ loading: true, content: null, error: null });
      postMessage(value);
    }

    return () => {
      worker.removeEventListener('message', handleMessage);
      worker.terminate();
    };
  }, []);

  const handleChange = (text: string) => {
    setValue(text);
    ls.save(text);
    setResult({ loading: true, content: null, error: null });
    postMessage(text);
  };

  const handleFilesDrop = (files: File[]) => {
    if (files.length > 0) {
      processSvgFile(files[0]).then((file) => handleChange(file.text));
    }
  };

  return (
    <div>
      <SvgInput
        value={value}
        onChange={handleChange}
        errors={result.error && value.trim().length > 0 ? ['input file'] : []}
        onFilesDrop={handleFilesDrop}
        dropLabel="Drop an SVG file to the browser window to optimize it and convert it to JSX"
      />

      <Output data={result} />
    </div>
  );
}
