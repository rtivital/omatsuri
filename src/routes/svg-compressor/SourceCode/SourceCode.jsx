import React from 'react';
import PropTypes from 'prop-types';

import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import classes from './SourceCode.styles.less';

export default function SourceCode({ value, onChange }) {
  return (
    <Background className={classes.wrapper}>
      <SettingsLabel>Paste svg markup or drag and drop file</SettingsLabel>
      <textarea
        placeholder="Paste svg markup here"
        className={classes.input}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </Background>
  );
}

SourceCode.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
