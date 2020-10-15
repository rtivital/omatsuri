import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import chevron from './chevron.svg';
import Input from '../Input/Input';
import classes from './Select.styles.less';

export default function Select({ className, data, value, onChange, id, label }) {
  const options = data.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className={cx(classes.select, className)}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <div className={classes.controlWrapper}>
        <Input
          component="select"
          className={classes.control}
          id={id}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        >
          {options}
        </Input>
        <img className={classes.chevron} src={chevron} alt="" />
      </div>
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }))
    .isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
