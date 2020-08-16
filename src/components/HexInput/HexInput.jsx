import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ChromePicker as ColorPicker } from 'react-color';
import Input from '../Input/Input';
import useIntermediateValue from '../../hooks/use-intermediate-value';
import classes from './HexInput.styles.less';

export default function HexInput({ className, value, onChange, ...others }) {
  const [colorPickerValue, setColorPickerValue] = useState(value);
  const { intermediateValue, valid, handleChange, handleSubmit } = useIntermediateValue({
    value,
    onChange,
    rule: (val) => /^#[0-9A-F]{6}$/i.test(val),
  });

  useEffect(() => {
    setColorPickerValue(value);
  }, [value]);

  return (
    <div className={cx(classes.wrapper, className)}>
      <Input
        {...others}
        invalid={!valid}
        type="text"
        value={intermediateValue}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={(event) => handleSubmit(event.target.value)}
      />
      <div className={classes.pickerWrapper}>
        <ColorPicker
          className={classes.picker}
          color={colorPickerValue}
          onChange={(event) => setColorPickerValue(event.hex)}
          onChangeComplete={(event) => handleChange(event.hex)}
        />
      </div>
    </div>
  );
}

HexInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
