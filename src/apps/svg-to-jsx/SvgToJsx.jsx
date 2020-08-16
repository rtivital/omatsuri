import React, { useState, useEffect } from 'react';
import SvgInput from '../../components/SvgInput/SvgInput';
import useDocumentTitle from '../../hooks/use-document-title';
import useLocalStorage from '../../hooks/use-local-storage';
import useSvgProcessor from '../../hooks/use-svg-processor';
import Svg2jsxWorker from '../../workers/svg-to-jsx.worker';
import Output from './Output/Output';

const svg2jsx = new Svg2jsxWorker();

export default function SvgToJsx() {
  useDocumentTitle('Svg to jsx');

  const svgProcessor = useSvgProcessor();
  const ls = useLocalStorage({ key: '@omatsuri/svg-to-jsx', delay: 1000 });
  const transmittedValue = useLocalStorage({ key: '@omatsuri/conversion-after-compression/jsx' });
  const [value, setValue] = useState(transmittedValue.retrieveAndClean() || ls.retrieve() || '');
  const [result, setResult] = useState({ loading: false, error: null, content: null });

  const handleMessage = (event) => {
    setResult({ loading: false, error: event.data.error, content: event.data.code });
  };

  const postMessage = (text) => svg2jsx.postMessage({ content: text });

  useEffect(() => {
    svg2jsx.addEventListener('message', handleMessage);

    if (value.trim().length > 0) {
      setResult({ loading: true, content: null, error: null });
      postMessage(value);
    }

    return () => svg2jsx.removeEventListener('message', handleMessage);
  }, []);

  const handleChange = (text) => {
    setValue(text);
    ls.save(text);
    setResult({ loading: true, content: null, error: null });
    postMessage(text);
  };

  const handleFilesDrop = (files) => {
    if (files.length > 0) {
      svgProcessor(files[0]).then((file) => handleChange(file.text));
    }
  };

  return (
    <div>
      <SvgInput
        value={value}
        onChange={handleChange}
        errors={result.error && value.trim().length > 0 ? ['input file'] : []}
        onFilesDrop={handleFilesDrop}
        dropLabel="Drop svg file to browser window to optimize it and convert it to jsx"
      />

      <Output data={result} />
    </div>
  );
}
