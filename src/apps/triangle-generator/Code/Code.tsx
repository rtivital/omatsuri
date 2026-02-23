import React, { useState } from 'react';
import { SegmentedControl } from '@mantine/core';
import { useLocalStorage } from '@hooks';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Highlight/Highlight';
import generateExample from './generate-example';
import classes from './Code.styles.module.css';

const languages = ['.css', '.scss', '.jss'].map((language) => ({
  value: language,
  label: language,
}));

export default function Code({ values }) {
  const ls = useLocalStorage({ key: '@omatsuri/triangle-generator/code', delay: 10 });
  const [language, setLanguage] = useState(ls.retrieve() || '.css');
  const [elementExample, pseudoExample] = generateExample(language, values)[1];

  const handleLanguageChange = (l) => {
    setLanguage(l);
    ls.save(l);
  };

  return (
    <Background className={classes.wrapper}>
      <SegmentedControl data={languages} value={language} onChange={handleLanguageChange} />
      <div className={classes.code}>
        <div className={classes.section}>
          <div className={classes.title}>Element</div>
          <Highlight>{elementExample}</Highlight>
        </div>

        <div className={classes.section}>
          <div className={classes.title}>Pseudo-element</div>
          <Highlight>{pseudoExample}</Highlight>
        </div>
      </div>
    </Background>
  );
}
