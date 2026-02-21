import type { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

const withContainer = (component: ReactElement) => <AppContainer>{component}</AppContainer>;

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/triangle-generator" element={withContainer(<TriangleGenerator />)} />
          <Route path="/lorem-ipsum" element={withContainer(<LoremIpsum />)} />
          <Route path="/svg-compressor" element={withContainer(<SvgCompressor />)} />
          <Route path="/svg-to-jsx" element={withContainer(<SvgToJsx />)} />
          <Route path="/html-symbols" element={withContainer(<HtmlSymbols />)} />
          <Route path="/b64-encoding" element={withContainer(<Base64Encoding />)} />
          <Route path="/color-shades-generator" element={withContainer(<ColorShadesGenerator />)} />
          <Route path="/page-dividers" element={withContainer(<PageDividers />)} />
          <Route path="/fake-data-generator" element={withContainer(<FakeDataGenerator />)} />
          <Route path="/css-cursors" element={withContainer(<CssCursors />)} />
          <Route path="/events-keycode" element={withContainer(<EventsKeycode />)} />
          <Route path="/gradient-generator" element={withContainer(<GradientGenerator />)} />
          <Route path="*" element={withContainer(<NotFound />)} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
