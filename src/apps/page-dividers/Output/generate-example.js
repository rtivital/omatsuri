const generateShape = (content) => (props) => `<div style="overflow: hidden;">
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    ${props}
  >
    ${content}
  </svg>
</div>`;

const shapes = {
  tilt: generateShape('<path d="M1200 120L0 16.48V0h1200v120z" />'),

  waves: generateShape(
    '<path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />'
  ),

  triangles: generateShape(
    '<path  d="M60 120L0 0h120L60 120zm120 0L120 0h120l-60 120zm120 0L240 0h120l-60 120zm120 0L360 0h120l-60 120zm120 0L480 0h120l-60 120zm120 0L600 0h120l-60 120zm120 0L720 0h120l-60 120zm120 0L840 0h120l-60 120zm120 0L960 0h120l-60 120zm120 0L1080 0h120l-60 120z"/>'
  ),

  waves_opaque: generateShape(`<path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />`),
};

function getTransformValue(values) {
  let value = '';

  if (values.position === 'bottom') {
    value += 'rotate(180deg) ';
  }

  if (values.direction === 'reverse') {
    value += 'scaleX(-1)';
  }

  return value.length === 0 ? null : value.trim();
}

function generateHtml(values) {
  const transformValue = getTransformValue(values);
  const transform = transformValue ? ` transform: ${transformValue};` : '';
  const style = `fill: ${values.color}; width: ${values.width}%; height: ${values.height}px;${transform}`;
  return shapes[values.type](`style="${style}"`);
}

function generateJSX(values) {
  const transformValue = getTransformValue(values);
  const transform = transformValue ? ` transform: '${transformValue}'` : '';
  const style = `fill: '${values.color}', width: '${values.width}%', height: ${values.height},${transform}`;
  return shapes[values.type](`style={{ ${style} }}`);
}

const types = {
  html: generateHtml,
  jsx: generateJSX,
};

export default function generateExample(type, values) {
  if (!(type in types) || !(values.type in shapes)) {
    return null;
  }

  return types[type](values);
}
