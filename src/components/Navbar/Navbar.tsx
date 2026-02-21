import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import cx from 'clsx';
import Scrollbars from 'react-custom-scrollbars-2';
import { useTheme } from '../../ThemeProvider';
import Background from '../Background/Background';
import GithubButton from '../GithubButton/GithubButton';
import ThemeControl from '../ThemeControl/ThemeControl';
import settings from '../../settings';
import logoText from '../../assets/logo-text.svg';
import logoTextWhite from '../../assets/logo-text-white.svg';
import logo from '../../assets/logo.svg';
import appIcons from '../../assets/app-icons';
import classes from './Navbar.styles.less';

const LINK_HEIGHT = 72;

const removeTrailingSlash = (path) =>
  path.slice(path.length - 1) === '/' ? path.slice(0, path.length - 1) : path;

const findCurrentIndex = (pathname) =>
  settings.tools.findIndex(
    (tool) => removeTrailingSlash(pathname) === removeTrailingSlash(tool.link)
  );

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [theme] = useTheme();
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(findCurrentIndex(pathname));
  const [offline, setOffline] = useState({ ready: false, error: false });
  const scrollbars = useRef<Scrollbars | null>(null);

  useEffect(() => {
    const currentIndex = findCurrentIndex(pathname);
    setCurrent(currentIndex);
    if (scrollbars.current) {
      scrollbars.current.scrollTop(currentIndex * LINK_HEIGHT);
    }
  }, [pathname]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(() => setOffline({ ready: true, error: false }))
        .catch(() => setOffline({ ready: false, error: true }));
    }
  }, []);

  const items = settings.tools.map((tool) => (
    <NavLink
      key={tool.name}
      to={tool.link}
      className={({ isActive: routeIsActive }) =>
        cx(classes.link, {
          [classes.linkActive]:
            routeIsActive || removeTrailingSlash(pathname) === removeTrailingSlash(tool.link),
        })
      }
      title={tool.name}
    >
      <img className={classes.icon} src={appIcons[tool.link]} alt={tool.name} />
      <div className={classes.label}>{tool.name}</div>
    </NavLink>
  ));

  const links = settings.meta.map((link, index) => {
    const { internal, label, ...linkProps } = link;

    if (internal) {
      return (
        <Link className={classes.footerLink} key={index} to={String(linkProps.to)}>
          {label}
        </Link>
      );
    }

    return (
      <a
        className={classes.footerLink}
        key={index}
        href={String(linkProps.href)}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    );
  });

  return (
    <Background component="nav" className={cx(classes.navbar, classes[theme], className)}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <Link to="/" className={classes.logo}>
            <img
              className={classes.logoImage}
              src={theme === 'light' ? logoText : logoTextWhite}
              alt="Logo"
            />
            <img className={classes.logoImageSmall} src={logo} alt="Logo" />
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
          <ThemeControl className={classes.themeControl} />
          <div className={classes.footerLinks}>{links}</div>
          {!offline.error && offline.ready && (
            <div className={classes.offline}>
              <span className={classes.offlineSuccess}>✓ Ready to work offline</span>
              <span className={classes.offlineSeparator}>•</span>
              <span className={classes.offlineDescription}>Install PWA from url bar</span>
            </div>
          )}
          <GithubButton />
        </div>
      </div>
    </Background>
  );
}
