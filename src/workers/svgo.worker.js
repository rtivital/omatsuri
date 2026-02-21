onmessage = (event) => {
  const { payload } = event.data;
  try {
    const content = String(event.data.content || '').trim();
    postMessage({ error: null, payload, content });
  } catch (error) {
    postMessage({ error, payload, content: null });
  }
};
