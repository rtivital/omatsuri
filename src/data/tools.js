import triangleGenerator from '../assets/app-icons/triangle-generator.svg';
import svgCompression from '../assets/app-icons/svg-compression.svg';
import svg2jsx from '../assets/app-icons/svg-to-jsx.svg';
import symbolsCollection from '../assets/app-icons/symbols-collection.svg';
import curvedDividers from '../assets/app-icons/curved-dividers.svg';
import loremIpsum from '../assets/app-icons/lorem-ipsum.svg';
import b64encoding from '../assets/app-icons/b64-encoding.svg';
import fakeDataGenerator from '../assets/app-icons/fake-data-generator.svg';
import colorShadesGenerator from '../assets/app-icons/color-shades-generator.svg';
import cssCursors from '../assets/app-icons/css-cursors.svg';
import eventsKeycode from '../assets/app-icons/events-keycode.svg';

export default [
  {
    link: '/triangle-generator',
    name: 'Triangle generator',
    description: 'Generate css triangles styles for elements and pseudo-elements',
    icon: triangleGenerator,
  },

  {
    link: '/color-shades-generator',
    name: 'Color shades generator',
    description: 'Generate tints and shades of a given color',
    icon: colorShadesGenerator,
  },

  {
    link: '/page-dividers',
    name: 'Curved page dividers',
    description: 'Tool to generate curved page dividers with css and svg images',
    icon: curvedDividers,
  },

  {
    link: '/svg-compressor',
    name: 'SVG compressor',
    description:
      'Compress SVG images with SVGO tool, convert to react component immediately after if needed',
    icon: svgCompression,
  },

  {
    link: '/svg-to-jsx',
    name: 'SVG → JSX',
    description:
      'Convert SVG icons and illustrations to react components (or components for other libraries with JSX support)',
    icon: svg2jsx,
  },

  {
    link: '/b64-encoding',
    name: 'Base64 encoding',
    description: 'Convert images or files to base64, generate styles to use as background image',
    icon: b64encoding,
  },

  {
    link: '/fake-data-generator',
    name: 'Fake data generator',
    description: 'Generate wide variety of realistic fake data: address, avatars, names, phones...',
    icon: fakeDataGenerator,
  },

  {
    link: '/html-symbols',
    name: 'Symbols collection',
    description:
      'Collection of commonly used html symbols: arrows, marks, currency signs and many others',
    icon: symbolsCollection,
  },

  {
    link: '/lorem-ipsum',
    name: 'Lorem ipsum',
    description: 'Generate different kinds of lorem ipsum text',
    icon: loremIpsum,
  },

  {
    link: '/css-cursors',
    name: 'CSS cursors',
    description: 'All existing CSS cursor property values collection',
    icon: cssCursors,
  },

  {
    link: '/events-keycode',
    name: 'Keyboard events codes',
    description: 'JavaScript events keycode values',
    icon: eventsKeycode,
  },
];
