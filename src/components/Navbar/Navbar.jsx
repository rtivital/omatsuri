import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Scrollbars from 'react-custom-scrollbars';
import Background from '../Background/Background';
import GithubButton from '../GithubButton/GithubButton';
import logoText from '../../assets/logo-text.svg';
import toolsData from '../../data/tools';
import classes from './Navbar.styles.less';

const isActive = (path, match, location) => !!(match || path === location.pathname);
const findCurrentIndex = (pathname) => toolsData.findIndex((tool) => pathname === tool.link);

export default function Navbar({ className }) {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(findCurrentIndex(pathname));

  useEffect(() => {
    setCurrent(findCurrentIndex(pathname));
  }, [pathname]);

  const items = toolsData.map((tool) => (
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
    <Background component="nav" className={cx(classes.navbar, className)}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <Link to="/" className={classes.logo}>
            <img className={classes.logoImage} src={logoText} alt="" />
          </Link>
          <Scrollbars style={{ width: '100%', height: 'calc(100vh - 242px)' }}>
            <div className={classes.links}>
              {items}
              <div
                className={classes.linkBackground}
                style={{
                  transform: current !== -1 ? `translateY(${current * 72}px)` : 'scaleY(0)',
                }}
              />
            </div>
          </Scrollbars>
        </div>

        <div className={classes.footer}>
          <GithubButton />
        </div>
      </div>
    </Background>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};
