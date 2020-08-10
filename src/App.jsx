import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Index from './routes/Index/Index';
import TriangleGenerator from './routes/triangle-generator/TriangleGenerator';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Index} />
      <Route path="/triangle-generator" exact component={TriangleGenerator} />
    </HashRouter>
  );
}

export default hot(module)(App);
