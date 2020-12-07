import React from 'react';
import { Link } from 'react-router-dom';
import settings from '../../settings';
import notFound from './not-found.svg';
import classes from './NotFound.styles.less';

export default function NotFound() {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={notFound} alt="Nothing found" />
      <h1 className={classes.title}>Congratulations!</h1>
      <p className={classes.description}>
        You&apos;ve found the 404 page. Now it&apos;s time to think about your next step. We can
        propose:
      </p>

      <div className={classes.links}>
        <Link to="/" className={classes.link}>
          ← Take you back to home page
        </Link>

        <a href={settings.repository} className={classes.link}>
          Take you to app repository →
        </a>
      </div>

      <p className={classes.description}>
        or you can always go to any app with navigation, it&apos;s right there on the left.
      </p>
    </div>
  );
}
