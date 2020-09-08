import React from 'react';
import github from '../../../assets/social/github.svg';
import telegram from '../../../assets/social/telegram.svg';
import twitter from '../../../assets/social/twitter.svg';
import settings from '../../../data/settings';
import classes from './Contributors.styles.less';

// author: {
//   avatar:
//     'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4',
//   name: 'Vitaly Rtishchev',
//   tg: 'https://t.me/rtivital',
//   github: 'rtivital',
//   wetsite: 'https://github.com/rtivital',
// },

export default function Contributors() {
  const { author, contributors } = settings.maintainers;

  const contributorsItems = contributors.map((contributor, index) => (
    <div className={classes.author} key={index}>
      <img className={classes.image} src={contributor.avatar} alt="" />
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
              <img className={classes.icon} src={github} alt="" />
            </a>
          )}

          {contributor.tg && (
            <a
              className={classes.socialLink}
              href={`https://t.me/${contributor.tg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.icon} src={telegram} alt="" />
            </a>
          )}

          {contributor.twitter && (
            <a
              className={classes.socialLink}
              href={`https://twitter.com/${contributor.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.icon} src={twitter} alt="" />
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Contributors</h2>
      <div className={classes.author}>
        <img className={classes.image} src={author.avatar} alt="" />
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
              <img className={classes.icon} src={github} alt="" />
            </a>

            <a
              className={classes.socialLink}
              href={`https://t.me/${author.tg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={classes.icon} src={telegram} alt="" />
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
