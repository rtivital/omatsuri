import React from 'react';
import GithubButton from '../GithubButton/GithubButton';
import logoText from '../../assets/logo-text.svg';
import classes from './Header.styles.less';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.headerBody}>
        <img className={classes.logo} src={logoText} alt="" />
        <p className={classes.description}>Open source browser tools for everyday use</p>
      </div>
      <GithubButton />
    </header>
  );
}
