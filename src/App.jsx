import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import ThemeProvider from './ThemeProvider';
import AppContainer from './components/AppContainer/AppContainer';

import Index from './pages/index/Index';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';

import TriangleGenerator from './apps/triangle-generator/TriangleGenerator';
import LoremIpsum from './apps/lorem-ipsum/LoremIpsum';
import SvgCompressor from './apps/svg-compressor/SvgCompressor';
import SvgToJsx from './apps/svg-to-jsx/SvgToJsx';
import HtmlSymbols from './apps/html-symbols/HtmlSymbols';
import Base64Encoding from './apps/b64-encoding/B64Encoding';
import ColorShadesGenerator from './apps/color-shades-generator/ColorShadesGenerator';
import PageDividers from './apps/page-dividers/PageDividers';
import FakeDataGenerator from './apps/fake-data-generator/FakeDataGenerator';
import CssCursors from './apps/css-cursors/CssCursors';
import EventsKeycode from './apps/events-keycode/EventsKeycode';
import GradientGenerator from './apps/gradient-generator/GradientGenerator';
import UrlEncoding from './apps/url-encoding/UrlEncoding';

function App() {
  return (
    <ThemeProvider>
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
                <Route path="/page-dividers" exact component={PageDividers} />
                <Route path="/fake-data-generator" exact component={FakeDataGenerator} />
                <Route path="/css-cursors" exact component={CssCursors} />
                <Route path="/events-keycode" exact component={EventsKeycode} />
                <Route path="/gradient-generator" exact component={GradientGenerator} />
                <Route path="/url-encoding" exact component={UrlEncoding} />
                <Route component={NotFound} />
              </Switch>
            </AppContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default hot(module)(App);
