import React from 'react';
import { Button, SegmentedControl } from '@mantine/core';
import SliderInput from '../../../components/SliderInput/SliderInput';
import { AVAILABLE_GENERATORS } from '../generate-text';
import Background from '../../../components/Background/Background';
import classes from './Settings.styles.module.css';

const types = AVAILABLE_GENERATORS.map((generator) => ({
  value: generator,
  label: `${generator.charAt(0).toUpperCase() + generator.slice(1)} ipsum`,
}));

export default function Settings({ onTypeChange, type, length, onLengthChange, onSubmit, copied }) {
  return (
    <Background className={classes.wrapper}>
      <SegmentedControl data={types} value={type} onChange={onTypeChange} size="sm" radius="md" />
      <div className={classes.footer}>
        <div className={classes.length}>
          <div className={classes.label}>Amount of paragraphs</div>
          <SliderInput value={length} min={1} max={20} onChange={onLengthChange} />
        </div>

        <Button
          className={classes.control}
          onClick={onSubmit}
          disabled={copied}
          variant="light"
          color={copied ? 'green' : 'violet'}
        >
          {copied ? 'Copied to clipboard' : 'Generate and copy to clipboard'}
        </Button>
      </div>
    </Background>
  );
}
