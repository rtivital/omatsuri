import React from 'react';
import PropTypes from 'prop-types';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import classes from './Output.styles.less';

function formatFileName(key) {
  if (key !== 'input_file') {
    return key;
  }

  return null;
}

export default function Output({ results }) {
  const files = Object.keys(results).sort((a, b) => results[b].queue - results[a].queue);

  if (files.length === 0) {
    return null;
  }

  const items = files.map((fileKey, index) => {
    if (!results[fileKey].content) {
      return null;
    }

    if (results[fileKey].error) {
      return (
        <Background key={index} className={classes.wrapper}>
          Failed to parse svg file
        </Background>
      );
    }

    return (
      <Background key={index} className={classes.wrapper}>
        <div className={classes.preview}>
          <SettingsLabel>Preview</SettingsLabel>
          <div dangerouslySetInnerHTML={{ __html: results[fileKey].content }} />
          <div className={classes.name}>{formatFileName(fileKey)}</div>
        </div>

        <div className={classes.result}>
          <SettingsLabel>Compressed Code</SettingsLabel>
          <code className={classes.code}>{results[fileKey].content || ''}</code>
        </div>
      </Background>
    );
  });

  return items;
}

Output.propTypes = {
  results: PropTypes.objectOf(
    PropTypes.shape({
      content: PropTypes.string,
      error: PropTypes.instanceOf(Error),
      loading: PropTypes.bool,
      queue: PropTypes.number.isRequired,
    })
  ),
};
