import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import SettingsLabel from '../SettingsLabel/SettingsLabel';
import Background from '../Background/Background';
import Dropzone from '../Dropzone/Dropzone';
import DropPlaceholder from '../DropPlaceholder/DropPlaceholder';
import example from './example';
import classes from './SvgInput.styles.less';

export default function SvgInput({
  value,
  onChange,
  errors,
  onFilesDrop,
  dropLabel,
  formatFileName = (f) => f,
}) {
  const formattedErrors = errors.map((error) => (
    <p className={classes.error}>Failed to parse or minify file {formatFileName(error)}</p>
  ));

  return (
    <>
      <Dropzone onDrop={onFilesDrop} />
      <DropPlaceholder>{dropLabel}</DropPlaceholder>
      <Background className={classes.wrapper}>
        <div className={classes.header}>
          <SettingsLabel className={classes.title}>Paste svg markup</SettingsLabel>
          <Button onClick={() => onChange(example)}>Load example</Button>
        </div>
        <textarea
          placeholder="Paste svg markup here"
          className={classes.input}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        {formattedErrors.length > 0 && <div className={classes.errors}>{formattedErrors}</div>}
      </Background>
    </>
  );
}

SvgInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilesDrop: PropTypes.func.isRequired,
  dropLabel: PropTypes.string.isRequired,
  formatFileName: PropTypes.func,
};
