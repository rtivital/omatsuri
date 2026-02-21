import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import Navbar from '../Navbar/Navbar';
import classes from './AppContainer.styles.less';

interface AppContainerProps {
  children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
  const [theme] = useTheme();

  return (
    <div className={cx(classes.appContainer, classes[theme])}>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
