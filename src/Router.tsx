import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AboutPage } from './pages/About.page';
import { TriangleGeneratorPage } from './pages/TriangleGenerator.page';
import { LoremIpsumPage } from './pages/LoremIpsum.page';
import { SvgCompressorPage } from './pages/SvgCompressor.page';
import { SvgToJsxPage } from './pages/SvgToJsx.page';
import { HtmlSymbolsPage } from './pages/HtmlSymbols.page';
import { Base64EncodingPage } from './pages/Base64Encoding.page';
import { ColorShadesGeneratorPage } from './pages/ColorShadesGenerator.page';
import { PageDividersPage } from './pages/PageDividers.page';
import { FakeDataGeneratorPage } from './pages/FakeDataGenerator.page';
import { CssCursorsPage } from './pages/CssCursors.page';
import { EventsKeycodePage } from './pages/EventsKeycode.page';
import { GradientGeneratorPage } from './pages/GradientGenerator.page';
import { NotFoundPage } from './pages/NotFound.page';
import { AppLayout } from './components/AppLayout/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/triangle-generator',
        element: <TriangleGeneratorPage />,
      },
      {
        path: '/lorem-ipsum',
        element: <LoremIpsumPage />,
      },
      {
        path: '/svg-compressor',
        element: <SvgCompressorPage />,
      },
      {
        path: '/svg-to-jsx',
        element: <SvgToJsxPage />,
      },
      {
        path: '/html-symbols',
        element: <HtmlSymbolsPage />,
      },
      {
        path: '/b64-encoding',
        element: <Base64EncodingPage />,
      },
      {
        path: '/color-shades-generator',
        element: <ColorShadesGeneratorPage />,
      },
      {
        path: '/page-dividers',
        element: <PageDividersPage />,
      },
      {
        path: '/fake-data-generator',
        element: <FakeDataGeneratorPage />,
      },
      {
        path: '/css-cursors',
        element: <CssCursorsPage />,
      },
      {
        path: '/events-keycode',
        element: <EventsKeycodePage />,
      },
      {
        path: '/gradient-generator',
        element: <GradientGeneratorPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
