import React, { useState, useLayoutEffect, useRef } from 'react';
import { useLocalStorage, useDocumentTitle } from '@hooks';
import SvgInput from '../../components/SvgInput/SvgInput';
import processSvgFile from '../../utils/process-svg-file';
import formatFileName from './format-file-name';
import Output from './Output/Output';

const INITIAL_PROGRESS_STATE = {
  loading: false,
  output: null,
  error: null,
};

export default function SvgCompressor() {
  useDocumentTitle('SVG compressor');
  const svgo = useRef<Worker | null>(null);
  if (!svgo.current) {
    svgo.current = new Worker(new URL('../../workers/svgo.worker.js', import.meta.url));
  }

  const ls = useLocalStorage({ key: '@omatsuri/svg-compressor', delay: 500 });
  const [value, setValue] = useState(ls.retrieve() || '');
  const [results, setResults] = useState<Record<string, any>>({});
  const queue = useRef(0);
  const incrementQueue = () => {
    queue.current += 1;
  };

  const postTextValue = (text: string) =>
    svgo.current?.postMessage({
      content: text,
      payload: { name: 'file', index: 'input', queue: queue.current },
    });

  const handleSvgoMessage = (event: MessageEvent<any>) => {
    const { index, name, queue: q } = event.data.payload;
    setResults((current) => ({
      ...current,
      [`${index}_${name}`]: {
        queue: q,
        loading: false,
        error: event.data.error,
        content: event.data.content,
      },
    }));
  };

  useLayoutEffect(() => {
    const worker = svgo.current;
    if (!worker) {
      return undefined;
    }

    worker.addEventListener('message', handleSvgoMessage);

    if (value.trim().length > 0) {
      postTextValue(value);
    }

    return () => {
      worker.removeEventListener('message', handleSvgoMessage);
      worker.terminate();
    };
  }, []);

  const handleFilesDrop = (files: File[]) => {
    incrementQueue();
    Promise.all(files.map((file) => processSvgFile(file))).then((filesData) => {
      setResults((current) =>
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
        svgo.current?.postMessage({
          content: fileData.text,
          payload: { name: fileData.file.name, index, queue: queue.current },
        });
      });
    });
  };

  const handleChange = (text: string) => {
    setValue(text);
    incrementQueue();
    ls.save(text);
    postTextValue(text);
  };

  const errors = Object.keys(results).filter((key) => results[key].error);

  return (
    <>
      <SvgInput
        value={value}
        onChange={handleChange}
        errors={errors}
        onFilesDrop={handleFilesDrop}
        formatFileName={formatFileName}
        dropLabel="Drop one or more SVG files to start compression"
      />
      <Output results={results} />
    </>
  );
}
