import React from 'react';
import cx from 'clsx';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../ThemeProvider';
import appIcons from '../../../assets/app-icons';
import classes from './ToolCard.styles.less';

export default function ToolCard({ className, name, description, link }) {
  const [theme] = useTheme();

  return (
    <Link className={cx(classes.tool, classes[theme], className)} to={link}>
      <div className={classes.header}>
        <img className={classes.icon} src={appIcons[link]} alt={name} width="100" height="100" />
      </div>
      <div className={classes.body}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.description}>{description}</p>
      </div>
    </Link>
  );
}
