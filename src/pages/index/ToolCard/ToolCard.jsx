import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import classes from './ToolCard.styles.less';

export default function ToolCard({ className, name, icon, description, link }) {
  return (
    <Link className={cx(classes.tool, className)} to={link}>
      <div className={classes.header}>
        <img className={classes.icon} src={icon} alt="" />
      </div>
      <div className={classes.body}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.description}>{description}</p>
      </div>
    </Link>
  );
}

ToolCard.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
