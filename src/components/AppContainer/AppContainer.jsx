import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import classes from './AppContainer.styles.less';

export default function AppContainer({ children }) {
  return (
    <div className={classes.appContainer}>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
