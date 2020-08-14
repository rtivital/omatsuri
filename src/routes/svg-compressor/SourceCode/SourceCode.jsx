import React from 'react';
import PropTypes from 'prop-types';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import formatFileName from '../format-file-name';
import classes from './SourceCode.styles.less';

export default function SourceCode({ value, onChange, errors }) {
  const errorsText = errors.reduce(
    (acc, error) => `${acc}Failed to parse or minify file ${formatFileName(error)}\n`,
    ''
  );
  return (
    <Background className={classes.wrapper}>
      <SettingsLabel>Paste svg markup or drop svg files to browser window</SettingsLabel>
      <textarea
        placeholder="Paste svg markup here"
        className={classes.input}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      {errorsText && <div className={classes.errors}>{errorsText}</div>}
    </Background>
  );
}

SourceCode.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
