import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../../components/Background/Background';
import classes from './Settings.styles.less';

export default function Settings({
  fields,
  amount,
  onAmountChange,
  onFieldAdd,
  onFieldRemove,
  onFieldPropChange,
}) {
  return <Background className={classes.wrapper}>Settings</Background>;
}

Settings.propTypes = {
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
};
