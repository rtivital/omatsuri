import React from 'react';
import useDocumentTitle from '../../hooks/use-document-title';
import PageBase from '../../components/PageBase/PageBase';
import Credits from './Credits';
import Application from './Application';
import classes from './About.styles.less';

export default function About() {
  useDocumentTitle('About Omatsuri');

  return (
    <PageBase>
      <div className={classes.about}>
        <Application />
        <Credits />
      </div>
    </PageBase>
  );
}
