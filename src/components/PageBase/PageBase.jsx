import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Container from '../Container/Container';
import classes from './PageBase.styles.less';

export default function PageBase({ children }) {
  return (
    <main className={classes.wrapper}>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </main>
  );
}

PageBase.propTypes = {
  children: PropTypes.node.isRequired,
};
