import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../../ThemeProvider';
import classes from './EventInfo.styles.less';

interface EventInfoProps {
  className?: string;
  title: string;
  kbd?: string;
  value: React.ReactNode | boolean;
  deprecation?: boolean;
}

export default function EventInfo({
  className,
  title,
  kbd,
  value,
  deprecation = false,
}: EventInfoProps) {
  const [theme] = useTheme();

  return (
    <div className={cx(classes.eventInfo, classes[theme], className)}>
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
        {value.toString() === ' ' ? (
          <div className={classes.space}>(Space charachter)</div>
        ) : (
          value.toString()
        )}
      </div>
    </div>
  );
}
