import React, { useState, useEffect } from 'react';
import useLocalStorage from '../../hooks/use-local-storage';
import generateText from './generate-text';
import Settings from './Settings/Settings';
import Preview from './Preview/Preview';

export default function LoremIpsum() {
  const ls = useLocalStorage({ key: '@omatsuri/lorem-ipsum', delay: 1000 });
  const initialValues = ls.retrieve();

  const [type, setType] = useState((initialValues && initialValues.type) || 'pokemon');
  const [length, setLength] = useState(3);
  const [text, setText] = useState(generateText(type, length));

  useEffect(() => {
    ls.save({ type, length });
  }, [type, length]);

  return (
    <div>
      <Settings type={type} length={length} onLengthChange={setLength} onTypeChange={setType} />
      <Preview text={text} />
    </div>
  );
}
