import React from 'react';
import PageBase from '../../components/PageBase/PageBase';
import Credits from './Credits/Credits';
import classes from './About.styles.less';

export default function About() {
  return (
    <PageBase>
      <div className={classes.about}>
        <Credits />
      </div>
    </PageBase>
  );
}
