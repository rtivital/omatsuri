import React, { useState, useEffect } from 'react';
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
  error: false,
};

export default function SvgCompressor() {
  const [value, onChange] = useState('');
  const [singleFileProgress, setSingleFileProgress] = useState(INITIAL_PROGRESS_STATE);
  const [miltiFileProgress, setMultiFileProgress] = useState({});

  useEffect(() => {
    svgo.addEventListener('message', event => {
      if (event.data.payload.single) {
        setSingleFileProgress({
          loading: false,
          output: event.data.content,
          error: event.data.error,
        });
      } else {
        const { index, name } = event.data.payload;
        setMultiFileProgress(current => ({
          ...current,
          [`@@${index}@@${name}`]: {
            loading: false,
            error: event.data.error,
            content: event.data.content,
          },
        }));
      }
    });
  }, []);

  const handleFilesDrop = files => {
    if (files.length > 0) {
      if (files.length === 1) {
        setMultiFileProgress({});

        processFile(files[0]).then(fileData => {
          onChange(fileData.text);
          svgo.postMessage({
            content: fileData.text,
            payload: { name: fileData.file.name, single: true },
          });
        });
      } else {
        Promise.all(files.map(file => processFile(file))).then(filesData => {
          setSingleFileProgress(INITIAL_PROGRESS_STATE);

          setMultiFileProgress(
            filesData.reduce((acc, fileData, index) => {
              acc[`@@${index}@@${fileData.file.name}`] = INITIAL_PROGRESS_STATE;
              return acc;
            }, {})
          );

          filesData.forEach((fileData, index) => {
            svgo.postMessage({
              content: fileData.text,
              payload: { name: fileData.file.name, index },
            });
          });
        });
      }
    }
  };

  return (
    <div>
      <SvgDropzone onDrop={handleFilesDrop} />
      <SourceCode value={value} onChange={onChange} />
      <Output singleFileProgress={singleFileProgress} miltiFileProgress={miltiFileProgress} />
    </div>
  );
}
