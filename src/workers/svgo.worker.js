import optimize from 'svgo-browser/lib/optimize';

function parseFileContent(file) {
  return file;
}

onmessage = (event) => {
  const data = event.data.type === 'raw'
    ? event.data.content
    : parseFileContent(event.data.file);

  optimize(data).then(postMessage);
};
