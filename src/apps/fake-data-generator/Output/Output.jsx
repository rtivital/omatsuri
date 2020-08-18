import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Highlight/Highlight';
import classes from './Output.styles.less';
import { generateRawData, generateJsonData } from '../generator';

export default function Output({ type, fields, amount, seed = null }) {
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

    return <Background className={classes.wrapper}>{items}</Background>;
  }

  return (
    <Background className={classes.wrapper}>
      <Highlight>{JSON.stringify(jsonData, null, 2)}</Highlight>
    </Background>
  );
}
