import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AppContainer from './components/AppContainer/AppContainer';

import Index from './routes/Index/Index';
import TriangleGenerator from './routes/triangle-generator/TriangleGenerator';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route>
          <AppContainer>
            <Switch>
              <Route path="/triangle-generator" exact component={TriangleGenerator} />
            </Switch>
          </AppContainer>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default hot(module)(App);
