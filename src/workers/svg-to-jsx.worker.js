import prettier from 'prettier/standalone';
import prettierBabel from 'prettier/parser-babel';
import svg2jsx from 'svg-to-jsx';
import optimize from 'svgo-browser/lib/optimize';

function generateComponent(svg) {
  return `import React from 'react';\n\nexport default function SvgComponent() { return ${svg} }`;
}

onmessage = (event) => {
  const { payload } = event.data;

  optimize(event.data.content)
    .then((content) => svg2jsx(content))
    .then((svg) =>
      prettier.format(generateComponent(svg), { parser: 'babel', plugins: [prettierBabel] })
    )
    .then((code) => postMessage({ error: null, payload, code }))
    .catch((error) => postMessage({ error, payload, content: null }));
};
