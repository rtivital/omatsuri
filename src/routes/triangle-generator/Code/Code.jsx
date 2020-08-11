import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tabs from '../../../components/Tabs/Tabs';
import Background from '../../../components/Background/Background';
import generateExample from './generate-example';
import classes from './Code.styles.less';

const languages = ['.css', '.scss', '.jss'].map(language => ({ value: language, label: language }));

export default function Code({ values }) {
  const [language, setLanguage] = useState('.css');
  const [lang, examples] = generateExample(language, values);

  return (
    <Background className={classes.wrapper}>
      <Tabs data={languages} active={language} onTabChange={setLanguage} />
      <div className={classes.code}>
        <div className={classes.tilte}>Element</div>
        <SyntaxHighlighter language={lang} style={coy}>
          {examples[0]}
        </SyntaxHighlighter>

        <div className={classes.tilte}>Pseudo-element</div>
        <SyntaxHighlighter language={lang} style={coy}>
          {examples[1]}
        </SyntaxHighlighter>
      </div>
    </Background>
  );
}
