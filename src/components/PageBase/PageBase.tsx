import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './PageBase.styles.less';

interface PageBaseProps {
  children: React.ReactNode;
}

export default function PageBase({ children }: PageBaseProps) {
  const [theme] = useTheme();

  return (
    <main className={cx(classes.wrapper, classes[theme])}>
      <div className={classes.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
