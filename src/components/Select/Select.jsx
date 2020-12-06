import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import Input from '../Input/Input';
import classes from './Select.styles.less';

export default function Select({ className, data, value, onChange, id, label }) {
  const [theme] = useTheme();
  const options = data.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className={cx(classes.select, classes[theme], className)}>
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
        <svg
          className={classes.chevron}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
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
