import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import GithubButton from '../GithubButton/GithubButton';
import toolsData from '../../data/tools';
import creditsData from '../../data/credits';
import classes from './Footer.styles.less';

export default function Footer({ className }) {
  const tools = toolsData.map(tool => (
    <Link className={classes.link} to={tool.link} key={tool.name}>
      {tool.name}
    </Link>
  ));

  const credits = creditsData.map(credit => (
    <a
      className={classes.link}
      key={credit.title}
      href={credit.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {credit.title}
    </a>
  ));

  return (
    <footer className={cx(classes.footer, className)}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <div className={classes.links}>
            <h3 className={classes.title}>Tools</h3>
            {tools}
          </div>

          <div className={classes.links}>
            <h3 className={classes.title}>Credits</h3>
            {credits}
          </div>
        </div>

        <GithubButton />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
