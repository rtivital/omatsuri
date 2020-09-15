import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import classes from './PageBase.styles.less';

export default function PageBase({ children }) {
  return (
    <main className={classes.wrapper}>
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
