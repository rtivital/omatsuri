import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Index from './routes/Index/Index';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Index} />
    </HashRouter>
  );
}

export default hot(module)(App);
