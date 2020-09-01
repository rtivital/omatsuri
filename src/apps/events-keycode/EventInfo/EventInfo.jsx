import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import classes from './EventInfo.styles.less';

export default function EventInfo({ className, title, kbd, value, deprecation = false }) {
  return (
    <div className={cx(classes.eventInfo, className)}>
      <div className={classes.title}>
        {kbd && <div className={classes.kbd}>{kbd}</div>}
        <div className={classes.titleLabel}>{title}</div>
        {deprecation && <div className={classes.deprecation}>deprecated</div>}
      </div>

      <div
        className={cx(classes.value, {
          [classes.boolean]: typeof value === 'boolean',
          [classes.false]: !value,
        })}
      >
        {value.toString()}
      </div>
    </div>
  );
}

EventInfo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  kbd: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]).isRequired,
  deprecation: PropTypes.bool,
};
