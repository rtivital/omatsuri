function toJsx(svg) {
  return svg
    .replace(/\sclass=/g, ' className=')
    .replace(/([:-]([a-z]))/g, (_, __, char) => char.toUpperCase());
}

function generateComponent(svg) {
  return `import React from 'react';\n\nexport default function SvgComponent() {\n  return (\n    ${svg}\n  );\n}\n`;
}

onmessage = (event) => {
  const { payload, content } = event.data;

  try {
    const svg = toJsx(String(content || '').trim());
    const code = generateComponent(svg);
    postMessage({ error: null, payload, code });
  } catch (error) {
    postMessage({ error, payload, content: null });
  }
};
