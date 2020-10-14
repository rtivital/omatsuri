import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Scrollbars from 'react-custom-scrollbars';
import Background from '../Background/Background';
import GithubButton from '../GithubButton/GithubButton';
import settings from '../../settings';
import logoText from '../../assets/logo-text.svg';
import logo from '../../assets/logo.svg';
import appIcons from '../../assets/app-icons';
import classes from './Navbar.styles.less';

const LINK_HEIGHT = 72;

const removeTrailingSlash = (path) =>
  (path.slice(path.length - 1) === '/' ? path.slice(0, path.length - 1) : path);

const isActive = (path, match, location) =>
  !!(match || removeTrailingSlash(path) === removeTrailingSlash(location.pathname));

const findCurrentIndex = (pathname) =>
  settings.tools.findIndex(
    (tool) => removeTrailingSlash(pathname) === removeTrailingSlash(tool.link)
  );

export default function Navbar({ className }) {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(findCurrentIndex(pathname));
  const scrollbars = useRef();

  useEffect(() => {
    const currentIndex = findCurrentIndex(pathname);
    setCurrent(currentIndex);
    scrollbars.current && scrollbars.current.scrollTop(currentIndex * LINK_HEIGHT);
  }, [pathname]);

  const items = settings.tools.map((tool) => (
    <NavLink
      key={tool.name}
      to={tool.link}
      className={classes.link}
      activeClassName={classes.linkActive}
      isActive={isActive.bind(this, tool.link)}
    >
      <img className={classes.icon} src={appIcons[tool.link]} alt="" />
      <div className={classes.label}>{tool.name}</div>
    </NavLink>
  ));

  const links = settings.meta.map((link, index) => {
    const { internal, label, ...linkProps } = link;
    const Component = internal ? Link : 'a';

    return (
      <Component
        className={classes.footerLink}
        key={index}
        {...linkProps}
        target={internal ? null : '_blank'}
      >
        {label}
      </Component>
    );
  });

  return (
    <Background component="nav" className={cx(classes.navbar, className)}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <Link to="/" className={classes.logo}>
            <img className={classes.logoImage} src={logoText} alt="" />
            <img className={classes.logoImageSmall} src={logo} alt="" />
          </Link>
          <Scrollbars className={classes.scrollbars} style={{ width: '100%' }} ref={scrollbars}>
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
          <div className={classes.footerLinks}>{links}</div>
          <GithubButton />
        </div>
      </div>
    </Background>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};
