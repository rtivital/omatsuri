import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import { useTheme } from '../../../ThemeProvider';
import GithubButton from '../../GithubButton/GithubButton';
import settings from '../../../settings';
import classes from './Footer.styles.less';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const [theme] = useTheme();

  const tools = settings.tools.map((tool) => (
    <Link className={classes.link} to={tool.link} key={tool.name}>
      {tool.name}
    </Link>
  ));

  const links = settings.meta.map((link, index) => {
    const { internal, label, ...linkProps } = link;

    if (internal) {
      return (
        <Link className={classes.link} key={index} to={String(linkProps.to)}>
          {label}
        </Link>
      );
    }

    return (
      <a
        className={classes.link}
        key={index}
        href={String(linkProps.href)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  });

  return (
    <footer className={cx(classes.footer, classes[theme], className)}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <div className={classes.links}>
            <h3 className={classes.title}>Tools</h3>
            <div className={classes.chunks}>{tools}</div>
          </div>

          <div className={classes.links}>
            <h3 className={classes.title}>Application</h3>
            {links}
          </div>
        </div>

        <div className={classes.control}>
          <GithubButton />
        </div>
      </div>
    </footer>
  );
}
