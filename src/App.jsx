import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={() => 'Home'} />
    </HashRouter>
  );
}

export default hot(module)(App);
