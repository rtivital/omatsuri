import triangleGenerator from '../assets/triangle-generator.svg';
// import gradientGenerator from '../assets/gradient-generator.svg';
import svgCompression from '../assets/svg-compression.svg';
import svg2jsx from '../assets/svg-to-jsx.svg';
import symbolsCollection from '../assets/symbols-collection.svg';
import curvedDividers from '../assets/curved-dividers.svg';
import loremIpsum from '../assets/lorem-inpsum.svg';
import b64encoding from '../assets/b64-encoding.svg';
import fakeDataGenerator from '../assets/fake-data-generator.svg';
import colorShadesGenerator from '../assets/color-shades-generator.svg';
import cssCursors from '../assets/css-cursors.svg';

export default [
  {
    link: '/triangle-generator',
    name: 'Triangle generator',
    description: 'Generate css triangles styles for elements and pseudo-elements',
    icon: triangleGenerator,
  },

  // under development
  /* {
    link: '/gradients-generator',
    name: 'Gradients generator',
    description: 'Generate linear and radial gradients, includes ready to use gradients library',
    icon: gradientGenerator,
  },*/

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
      'Compress svg images with svgo tool, convert to react component immediately after if needed',
    icon: svgCompression,
  },

  {
    link: '/svg-to-jsx',
    name: 'SVG → JSX',
    description:
      'Convert svg icons and illustrations to react components (or components for other libraries with jsx support)',
    icon: svg2jsx,
  },

  {
    link: '/b64-encoding',
    name: 'Base64 encoding',
    description: 'Convers images or files to base64, generate styles to use as background image',
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
];
