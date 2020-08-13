import React, { useState, useEffect, useRef } from 'react';
import SvgDropzone from '../../components/SvgDropzone/SvgDropzone';
import SvgoWorker from '../../workers/svgo.worker';
import SourceCode from './SourceCode/SourceCode';
import Output from './Output/Output';

const svgo = new SvgoWorker();

const processFile = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.addEventListener('load', event => resolve({ text: event.target.result, file }));
    reader.addEventListener('error', reject);
  });

const INITIAL_PROGRESS_STATE = {
  loading: false,
  output: null,
  error: null,
};

export default function SvgCompressor() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState({});
  const queue = useRef(0);
  const incrementQueue = () => {
    queue.current += 1;
  };

  useEffect(() => {
    svgo.addEventListener('message', event => {
      const { index, name, queue: q } = event.data.payload;
      console.log(q);
      setResults(current => ({
        ...current,
        [`${index}_${name}`]: {
          queue: q,
          loading: false,
          error: event.data.error,
          content: event.data.content,
        },
      }));
    });
  }, []);

  const handleFilesDrop = files => {
    incrementQueue();
    Promise.all(files.map(file => processFile(file))).then(filesData => {
      setResults(current =>
        filesData.reduce(
          (acc, fileData, index) => {
            acc[`${index}_${fileData.file.name}`] = {
              ...INITIAL_PROGRESS_STATE,
              queue: queue.current,
            };
            return acc;
          },
          { ...current }
        )
      );

      filesData.forEach((fileData, index) => {
        svgo.postMessage({
          content: fileData.text,
          payload: { name: fileData.file.name, index, queue: queue.current },
        });
      });
    });
  };

  const handleChange = text => {
    setValue(text);
    incrementQueue();

    svgo.postMessage({
      content: text,
      payload: { name: 'file', index: 'input', queue: queue.current },
    });
  };

  return (
    <div>
      <SvgDropzone onDrop={handleFilesDrop} />
      <SourceCode value={value} onChange={handleChange} />
      <Output results={results} />
    </div>
  );
}
