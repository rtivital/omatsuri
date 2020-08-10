import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import GithubButton from '../GithubButton/GithubButton';
import toolsData from '../../data/tools';
import classes from './Navbar.styles.less';

const isActive = (path, match, location) => !!(match || path === location.pathname);

export default function Navbar({ className }) {
  const items = toolsData.map(tool => (
    <NavLink
      key={tool.name}
      to={tool.link}
      exact
      className={classes.link}
      activeClassName={classes.linkActive}
      isActive={isActive.bind(this, tool.link)}
    >
      <img className={classes.icon} src={tool.icon} alt="" />
      <div className={classes.label}>{tool.name}</div>
    </NavLink>
  ));

  return (
    <nav className={cx(classes.navbar, className)}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <Link to="/" className={classes.logo}>
            Omatsuri (logo placeholder)
          </Link>
          <div className={classes.links}>{items}</div>
        </div>

        <div className={classes.footer}>
          <GithubButton />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};
