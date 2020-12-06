import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../ThemeProvider';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './PageBase.styles.less';

export default function PageBase({ children }) {
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

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
};
