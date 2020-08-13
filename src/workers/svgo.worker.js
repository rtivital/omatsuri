import optimize from 'svgo-browser/lib/optimize';

onmessage = event => {
  const { payload } = event.data;

  optimize(event.data.content)
    .then(content => postMessage({ error: null, payload, content }))
    .catch(error => postMessage({ error, payload, content: null }));
};
