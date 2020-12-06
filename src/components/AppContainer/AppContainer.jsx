import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import Navbar from '../Navbar/Navbar';
import classes from './AppContainer.styles.less';

export default function AppContainer({ children }) {
  const [theme] = useTheme();

  return (
    <div className={cx(classes.appContainer, classes[theme])}>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
