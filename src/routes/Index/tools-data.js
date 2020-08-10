import cssTriangle from '../../assets/css-triangle.svg';
import gradient from '../../assets/gradient.svg';
import svgCompression from '../../assets/svg-compression.svg';
import svg2jsx from '../../assets/svg-to-jsx.svg';

export default [
  {
    link: '/css-triangle',
    name: 'Triangle generator',
    description: 'Generate css triangles styles for elements and pseudo-elements',
    icon: cssTriangle,
  },

  {
    link: '/css-gradient',
    name: 'Gradients generator',
    description: 'Generate linear and radial gradients, includes ready to use gradients library',
    icon: gradient,
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
];
