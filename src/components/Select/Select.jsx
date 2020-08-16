import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './Select.styles.less';

export default function Select({ className, data, value, onChange, id, label }) {
  const options = data.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className={cx(classes.select, className)}>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={(event) => onChange(event.target.value)} value={value}>
        {options}
      </select>
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
