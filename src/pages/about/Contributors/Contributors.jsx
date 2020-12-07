import React from 'react';
import { useTheme } from '../../../ThemeProvider';
import github from './icons/github.svg';
import githubWhite from './icons/github-white.svg';
import telegram from './icons/telegram.svg';
import twitter from './icons/twitter.svg';
import settings from '../../../settings';
import classes from './Contributors.styles.less';

export default function Contributors() {
  const [theme] = useTheme();
  const { author, contributors } = settings.maintainers;

  const contributorsItems = contributors.map((contributor, index) => (
    <div className={classes.author} key={index}>
      <img className={classes.image} src={contributor.avatar} alt={contributor.name} />
      <div className={classes.body}>
        <div className={classes.name}>
          <span>{contributor.name}</span>
        </div>

        {contributor.website && (
          <a
            className={classes.website}
            href={contributor.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contributor.website}
          </a>
        )}

        <div className={classes.social}>
          {contributor.github && (
            <a
              className={classes.socialLink}
              href={`https://github.com/${contributor.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.icon}
                src={theme === 'light' ? github : githubWhite}
                alt="Github logo"
              />
            </a>
          )}

          {contributor.tg && (
            <a
              className={classes.socialLink}
              href={`https://t.me/${contributor.tg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.icon} src={telegram} alt="Telegram logo" />
            </a>
          )}

          {contributor.twitter && (
            <a
              className={classes.socialLink}
              href={`https://twitter.com/${contributor.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.icon} src={twitter} alt="Twitter logo" />
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={classes[theme]}>
      <h2>Contributors</h2>
      <div className={classes.author}>
        <img className={classes.image} src={author.avatar} alt="Vitaly Rtishchev" />
        <div className={classes.body}>
          <div className={classes.name}>
            <span>{author.name}</span>
            <span className={classes.badge}>Author</span>
          </div>
          <a
            className={classes.website}
            href={author.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {author.website}
          </a>
          <div className={classes.social}>
            <a
              className={classes.socialLink}
              href={`https://github.com/${author.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.icon}
                src={theme === 'light' ? github : githubWhite}
                alt="Github logo"
              />
            </a>

            <a
              className={classes.socialLink}
              href={`https://t.me/${author.tg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.icon} src={telegram} alt="Telegram logo" />
            </a>
          </div>
        </div>
      </div>
      {contributorsItems}
      <a className={classes.becomeLink} href={settings.repository}>
        Become a contributor
      </a>
    </div>
  );
}
