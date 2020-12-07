import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';
import GithubButton from '../../GithubButton/GithubButton';
import settings from '../../../settings';
import classes from './Footer.styles.less';

export default function Footer({ className }) {
  const [theme] = useTheme();

  const tools = settings.tools.map((tool) => (
    <Link className={classes.link} to={tool.link} key={tool.name}>
      {tool.name}
    </Link>
  ));

  const links = settings.meta.map((link, index) => {
    const { internal, label, ...linkProps } = link;
    const Component = internal ? Link : 'a';

    return (
      <Component
        className={classes.link}
        key={index}
        {...linkProps}
        target={internal ? null : '_blank'}
        rel={internal ? null : 'noopener noreferrer'}
      >
        {label}
      </Component>
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

Footer.propTypes = {
  className: PropTypes.string,
};
