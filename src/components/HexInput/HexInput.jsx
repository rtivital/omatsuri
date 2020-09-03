import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ChromePicker as ColorPicker } from 'react-color';
import { useIntermediateValue, useClickOutside } from 'xooks';
import Input from '../Input/Input';
import classes from './HexInput.styles.less';

export default function HexInput({ className, value, onChange, ...others }) {
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);
  const [colorPickerValue, setColorPickerValue] = useState(value);
  const { intermediateValue, valid, handleChange, handleSubmit } = useIntermediateValue({
    value,
    onChange,
    rule: (val) => /^#[0-9A-F]{6}$/i.test(val),
  });

  const closePicker = () => setOpened(false);

  useClickOutside(ref, closePicker);
  useEffect(() => {
    setColorPickerValue(value);
  }, [value]);

  return (
    <div className={cx(classes.wrapper, className)} ref={ref}>
      <div className={classes.inputWrapper}>
        <button
          className={classes.control}
          type="button"
          onClick={() => setOpened((o) => !o)}
          style={{ backgroundColor: value }}
        />
        <Input
          {...others}
          className={classes.input}
          invalid={!valid}
          type="text"
          value={intermediateValue}
          onChange={(event) => handleChange(event.target.value)}
          onBlur={(event) => handleSubmit(event.target.value)}
        />
      </div>
      {opened && (
        <div className={classes.pickerWrapper}>
          <ColorPicker
            className={classes.picker}
            color={colorPickerValue}
            onChange={(event) => setColorPickerValue(event.hex)}
            onChangeComplete={(event) => handleChange(event.hex)}
          />
        </div>
      )}
    </div>
  );
}

HexInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
