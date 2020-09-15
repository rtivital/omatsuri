import React from 'react';
import { Link } from 'react-router-dom';
import GithubButton from '../../GithubButton/GithubButton';
import logoText from '../../../assets/logo-text.svg';
import classes from './Header.styles.less';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.headerBody}>
        <Link to="/">
          <img className={classes.logo} src={logoText} alt="" />
        </Link>
        <p className={classes.description}>Open source browser tools for everyday use</p>
      </div>
      <GithubButton />
    </header>
  );
}
