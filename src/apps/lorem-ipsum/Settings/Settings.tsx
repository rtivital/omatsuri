import React from 'react';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Button from '../../../components/Button/Button';
import Tabs from '../../../components/Tabs/Tabs';
import { AVAILABLE_GENERATORS } from '../generate-text';
import Background from '../../../components/Background/Background';
import classes from './Settings.styles.less';

const types = AVAILABLE_GENERATORS.map((generator) => ({
  value: generator,
  label: `${generator.charAt(0).toUpperCase() + generator.slice(1)} ipsum`,
}));

export default function Settings({ onTypeChange, type, length, onLengthChange, onSubmit, copied }) {
  return (
    <Background className={classes.wrapper}>
      <Tabs data={types} active={type} onTabChange={onTypeChange} />
      <div className={classes.footer}>
        <div className={classes.length}>
          <div className={classes.label}>Amount of paragraphs</div>
          <SliderInput value={length} min={1} max={20} onChange={onLengthChange} />
        </div>

        <Button
          className={classes.control}
          onClick={onSubmit}
          disabled={copied}
          theme={copied ? 'success' : 'primary'}
        >
          {copied ? 'Copied to clipboard' : 'Generate and copy to clipboard'}
        </Button>
      </div>
    </Background>
  );
}
