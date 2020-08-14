import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AppContainer from './components/AppContainer/AppContainer';
import NotFound from './components/NotFound/NotFound';

import Index from './routes/Index/Index';
import TriangleGenerator from './routes/triangle-generator/TriangleGenerator';
import LoremIpsum from './routes/lorem-ipsum/LoremIpsum';
import SvgCompressor from './routes/svg-compressor/SvgCompressor';
import SvgToJsx from './routes/svg-to-jsx/SvgToJsx';
import HtmlSymbols from './routes/html-symbols/HtmlSymbols';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route>
          <AppContainer>
            <Switch>
              <Route path="/triangle-generator" exact component={TriangleGenerator} />
              <Route path="/lorem-ipsum" exact component={LoremIpsum} />
              <Route path="/svg-compressor" exact component={SvgCompressor} />
              <Route path="/svg-to-jsx" exact component={SvgToJsx} />
              <Route path="/html-symbols" exact component={HtmlSymbols} />
              <Route component={NotFound} />
            </Switch>
          </AppContainer>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default hot(module)(App);
