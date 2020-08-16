import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import AppContainer from './components/AppContainer/AppContainer';
import NotFound from './components/NotFound/NotFound';

import Index from './routes/Index/Index';
import About from './routes/About/About';

import TriangleGenerator from './routes/triangle-generator/TriangleGenerator';
import LoremIpsum from './routes/lorem-ipsum/LoremIpsum';
import SvgCompressor from './routes/svg-compressor/SvgCompressor';
import SvgToJsx from './routes/svg-to-jsx/SvgToJsx';
import HtmlSymbols from './routes/html-symbols/HtmlSymbols';
import Base64Encoding from './routes/b64-encoding/B64Encoding';
import ColorShadesGenerator from './routes/color-shades-generator/ColorShadesGenerator';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route>
          <AppContainer>
            <Switch>
              <Route path="/triangle-generator" exact component={TriangleGenerator} />
              <Route path="/lorem-ipsum" exact component={LoremIpsum} />
              <Route path="/svg-compressor" exact component={SvgCompressor} />
              <Route path="/svg-to-jsx" exact component={SvgToJsx} />
              <Route path="/html-symbols" exact component={HtmlSymbols} />
              <Route path="/b64-encoding" exact component={Base64Encoding} />
              <Route path="/color-shades-generator" exact component={ColorShadesGenerator} />
              <Route component={NotFound} />
            </Switch>
          </AppContainer>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default hot(module)(App);
