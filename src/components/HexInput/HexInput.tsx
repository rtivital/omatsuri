import React, { useState, useLayoutEffect, useRef } from 'react';
import cx from 'clsx';
import { useClickOutside } from '@hooks';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { useTheme } from '../../ThemeProvider';
import classes from './HexInput.styles.less';

interface HexInputProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  [key: string]: any;
}

export default function HexInput({ className, value, onChange, ...others }: HexInputProps) {
  const [theme] = useTheme();
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);
  const closePicker = () => setOpened(false);
  const closeOnEscape = (event) => event.code === 'Escape' && closePicker();

  useClickOutside(ref, closePicker);

  useLayoutEffect(() => {
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className={cx(classes.wrapper, classes[theme], className)} ref={ref}>
      <div className={classes.inputWrapper}>
        <button
          className={classes.control}
          type="button"
          onClick={() => setOpened((o) => !o)}
          style={{ backgroundColor: value }}
        />
        <div className={classes.hash}>#</div>
        <HexColorInput {...others} className={classes.input} color={value} onChange={onChange} />
      </div>
      {opened && <HexColorPicker className={classes.picker} color={value} onChange={onChange} />}
    </div>
  );
}
