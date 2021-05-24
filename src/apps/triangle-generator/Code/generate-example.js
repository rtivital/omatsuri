import getTriangleStyles from '../get-triangle-styles';

function generateCssExample(value) {
  const { borderWidth, borderColor } = getTriangleStyles(value);
  const shared = `width: 0;
  height: 0;
  border-style: solid;
  border-width: ${borderWidth};
  border-color: ${borderColor};`;

  const element = `.element {\n  ${shared}\n}`;
  const pseudo = `.element::after {\n  content: '';\n  display: block;\n  ${shared}\n}`;

  return [element, pseudo];
}

function generateScssExample(value) {
  const { borderWidth, borderColor } = getTriangleStyles(value);
  const shared = `width: 0;
  height: 0;
  border-style: solid;
  border-width: ${borderWidth};
  border-color: ${borderColor};`;

  const element = `.element {\n  ${shared}\n}`;
  const pseudo = `&::after {\n  content: '';\n  display: block;\n  ${shared}  \n}`;

  return [element, pseudo];
}

function generateJssExample(value) {
  const { borderWidth, borderColor } = getTriangleStyles(value);
  const shared = `width: 0,
  height: 0,
  borderStyle: 'solid',
  borderWidth: '${borderWidth}',
  borderColor: '${borderColor}',`;

  const element = `element: {\n  ${shared}\n},`;
  const pseudo = `'&::after': {\n  content: "''",\n  display: 'block',\n  ${shared}  \n},`;

  return [element, pseudo];
}

export default function generateExample(language, value) {
  switch (language) {
    case '.css':
      return ['css', generateCssExample(value)];

    case '.scss':
      return ['scss', generateScssExample(value)];

    case '.jss':
      return ['javascript', generateJssExample(value)];

    default:
      return null;
  }
}
