import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button/Button';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Background from '../../../components/Background/Background';
import formatFileName from '../format-file-name';
import example from './example';
import classes from './SourceCode.styles.less';

export default function SourceCode({ value, onChange, errors }) {
  const formattedErrors = errors.map(error => (
    <p className={classes.error}>Failed to parse or minify file {formatFileName(error)}</p>
  ));

  return (
    <Background className={classes.wrapper}>
      <div className={classes.header}>
        <SettingsLabel className={classes.title}>
          Paste svg markup or drop svg files to browser window
        </SettingsLabel>
        <Button onClick={() => onChange(example)}>Load example</Button>
      </div>
      <textarea
        placeholder="Paste svg markup here"
        className={classes.input}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      {formattedErrors.length > 0 && <div className={classes.errors}>{formattedErrors}</div>}
    </Background>
  );
}

SourceCode.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
