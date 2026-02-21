import React from 'react';
import Background from '../../../components/Background/Background';
import CompressedResult from '../CompressedResult/CompressedResult';
import classes from './Output.styles.less';

export default function Output({ results }) {
  const files = Object.keys(results).sort((a, b) => results[b].queue - results[a].queue);

  if (files.length === 0) {
    return null;
  }

  const items = files.map((fileKey) => {
    if (!results[fileKey].content) {
      return null;
    }

    if (results[fileKey].error) {
      return (
        <Background key={fileKey} className={classes.wrapper}>
          Failed to parse SVG file
        </Background>
      );
    }

    return <CompressedResult key={fileKey} content={results[fileKey].content} fileKey={fileKey} />;
  });

  return items;
}
