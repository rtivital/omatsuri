import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import { useTheme } from '../../../ThemeProvider';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Highlight/Highlight';
import { generateRawData, generateJsonData } from '../generator';
import classes from './Output.styles.less';

export default function Output({ type, fields, amount, seed = null }) {
  const [theme] = useTheme();
  const [rawData, setRawData] = useState(generateRawData());
  const [jsonData, setJsonData] = useState(generateJsonData(fields, amount));

  useEffect(() => {
    setRawData(generateRawData());
    setJsonData(generateJsonData(fields, amount));
  }, [seed]);

  if (type === 'default') {
    const items = rawData.map((item) => (
      <div key={item.key} className={classes.rawItem}>
        <div className={classes.key}>{item.key}</div>
        <div className={classes.value}>{item.data}</div>
      </div>
    ));

    return <Background className={cx(classes.wrapper, classes[theme])}>{items}</Background>;
  }

  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <Highlight>{JSON.stringify(jsonData, null, 2)}</Highlight>
    </Background>
  );
}
