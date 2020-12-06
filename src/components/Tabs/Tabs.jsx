import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import classes from './Tabs.styles.less';

export default function Tabs({ className, data, active, onTabChange }) {
  const [theme] = useTheme();

  const tabs = data.map((tab) => (
    <button
      type="button"
      key={tab.value}
      onClick={() => onTabChange(tab.value)}
      className={cx(classes.control, {
        [classes.active]: active === tab.value,
      })}
    >
      {tab.label}
    </button>
  ));

  return <div className={cx(classes.tabs, classes[theme], className)}>{tabs}</div>;
}

Tabs.propTypes = {
  className: PropTypes.string,
  active: PropTypes.string,
  onTabChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
