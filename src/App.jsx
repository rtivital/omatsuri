import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './styles.less';

function App() {
  return <div className={styles.body}>App</div>;
}

export default hot(module)(App);
