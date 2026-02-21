import React from 'react';
import { useDocumentTitle } from '@hooks';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import PageBase from '../../components/PageBase/PageBase';
import Credits from './Credits';
import Application from './Application';
import Contributors from './Contributors/Contributors';
import classes from './About.styles.less';

export default function About() {
  useDocumentTitle('About Omatsuri');

  const [theme] = useTheme();

  return (
    <PageBase>
      <div className={cx(classes.about, classes[theme])}>
        <Application />
        <Contributors />
        <Credits />
      </div>
    </PageBase>
  );
}
