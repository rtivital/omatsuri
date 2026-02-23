import React, { useState, useLayoutEffect, useRef } from 'react';
import cx from 'clsx';
import { ColorPicker } from '@mantine/core';
import { useClickOutside } from '@hooks';
import { useTheme } from '../../ThemeProvider';
import classes from './HexInput.styles.module.css';

interface HexInputProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  [key: string]: any;
}

function normalizeHex(value: string) {
  if (!value) {
    return '#';
  }

  return value.startsWith('#') ? value : `#${value}`;
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
        <input
          {...others}
          className={classes.input}
          value={value.replace(/^#/, '')}
          onChange={(event) => onChange(normalizeHex(event.currentTarget.value))}
        />
      </div>
      {opened && (
        <ColorPicker
          className={classes.picker}
          format="hex"
          value={value}
          onChange={onChange}
          fullWidth
        />
      )}
    </div>
  );
}
