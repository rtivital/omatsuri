import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../components/Tabs/Tabs';
import Background from '../../../components/Background/Background';
import Button from '../../../components/Button/Button';
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
  return (
    <Background className={classes.wrapper}>
      <div className={classes.header}>
        <Tabs data={types} active={type} onTabChange={onTypeChange} />
        <Button onClick={onRegenerate} className={classes.regenerate}>
          Regenerate
        </Button>
      </div>
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
};
