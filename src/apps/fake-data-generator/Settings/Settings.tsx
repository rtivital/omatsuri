import React from 'react';
import cx from 'clsx';
import { Button, NativeSelect, SegmentedControl, TextInput } from '@mantine/core';
import { useTheme } from '../../../ThemeProvider';
import Background from '../../../components/Background/Background';
import SliderInput from '../../../components/SliderInput/SliderInput';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import { generatorsData } from '../generator';
import classes from './Settings.styles.module.css';

const types = [
  { value: 'default', label: 'Raw data' },
  { value: 'json', label: 'JSON Schema' },
];

export default function Settings({
  fields,
  amount,
  onAmountChange,
  onFieldAdd,
  onFieldRemove,
  onFieldPropChange,
  type,
  onTypeChange,
  onRegenerate,
}) {
  const [theme] = useTheme();

  const schema = fields.map((field, index) => (
    <div className={classes.field} key={field.key}>
      <div className={classes.input}>
        <div className={classes.label}>Name</div>
        <TextInput
          value={field.name}
          onChange={(event) => onFieldPropChange(index, 'name', event.target.value)}
          classNames={{ input: classes.nameInput }}
        />
      </div>

      <NativeSelect
        className={classes.input}
        id={field.key}
        label="Type"
        data={generatorsData}
        value={field.type}
        onChange={(event) => onFieldPropChange(index, 'type', event.currentTarget.value)}
      />

      <button className={classes.remove} type="button" onClick={() => onFieldRemove(index)}>
        Remove
      </button>
    </div>
  ));

  return (
    <Background className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.header}>
        <SegmentedControl data={types} value={type} onChange={onTypeChange} />
        <Button variant="light" color="violet" onClick={onRegenerate} className={classes.regenerate}>
          Regenerate
        </Button>
      </div>

      {type === 'json' && (
        <>
          {' '}
          <div className={classes.body}>
            <SettingsLabel>JSON Schema</SettingsLabel>

            {schema}
          </div>
          <div className={classes.footer}>
            <div className={classes.control}>
              <Button variant="light" color="violet" onClick={onFieldAdd}>
                + Add field
              </Button>
            </div>

            <div>
              <div className={classes.label}>Amount of documents</div>
              <SliderInput value={amount} onChange={onAmountChange} min={1} max={100} />
            </div>
          </div>
        </>
      )}
    </Background>
  );
}
