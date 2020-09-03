import React from 'react';
import { useDocumentTitle } from 'xooks';
import PageBase from '../../components/PageBase/PageBase';
import Credits from './Credits';
import Application from './Application';
import Contributors from './Contributors/Contributors';
import classes from './About.styles.less';

export default function About() {
  useDocumentTitle('About Omatsuri');

  return (
    <PageBase>
      <div className={classes.about}>
        <Application />
        <Contributors />
        <Credits />
      </div>
    </PageBase>
  );
}
