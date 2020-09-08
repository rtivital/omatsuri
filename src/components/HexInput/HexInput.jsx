import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useClickOutside } from 'xooks';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import classes from './HexInput.styles.less';

export default function HexInput({ className, value, onChange, ...others }) {
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);
  const closePicker = () => setOpened(false);

  useClickOutside(ref, closePicker);

  return (
    <div className={cx(classes.wrapper, className)} ref={ref}>
      <div className={classes.inputWrapper}>
        <button
          className={classes.control}
          type="button"
          onClick={() => setOpened((o) => !o)}
          style={{ backgroundColor: value }}
        />
        <HexColorInput {...others} className={classes.input} color={value} onChange={onChange} />
      </div>
      {opened && <HexColorPicker className={classes.picker} color={value} onChange={onChange} />}
    </div>
  );
}

HexInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
