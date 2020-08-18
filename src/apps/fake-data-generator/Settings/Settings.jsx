import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../components/Tabs/Tabs';
import Background from '../../../components/Background/Background';
import SliderInput from '../../../components/SliderInput/SliderInput';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import Button from '../../../components/Button/Button';
import Select from '../../../components/Select/Select';
import Input from '../../../components/Input/Input';
import { generatorsData } from '../generator';
import classes from './Settings.styles.less';

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
  const schema = fields.map((field, index) => (
    <div className={classes.field} key={field.key}>
      <div className={classes.input}>
        <div className={classes.label}>Name</div>
        <Input
          className={classes.nameInput}
          value={field.name}
          onChange={(event) => onFieldPropChange(index, 'name', event.target.value)}
        />
      </div>

      <Select
        className={classes.input}
        id={field.key}
        label="Type"
        data={generatorsData}
        value={field.type}
        onChange={(value) => onFieldPropChange(index, 'type', value)}
      />

      <button className={classes.remove} type="button" onClick={onFieldRemove}>
        Remove
      </button>
    </div>
  ));

  return (
    <Background className={classes.wrapper}>
      <div className={classes.header}>
        <Tabs data={types} active={type} onTabChange={onTypeChange} />
        <Button onClick={onRegenerate} className={classes.regenerate}>
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
              <Button onClick={onFieldAdd}>+ Add field</Button>
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

Settings.propTypes = {
  type: PropTypes.oneOf(['default', 'json']).isRequired,
  amount: PropTypes.number.isRequired,

  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ),

  onAmountChange: PropTypes.func.isRequired,
  onFieldAdd: PropTypes.func.isRequired,
  onFieldRemove: PropTypes.func.isRequired,
  onFieldPropChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onRegenerate: PropTypes.func.isRequired,
};
