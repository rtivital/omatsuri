import optimize from 'svgo-browser/lib/optimize';
import useSvgProcessor from '../hooks/use-svg-processor';

const svgProcessor = useSvgProcessor();

onmessage = (event) => {
  const { file, content } = event.data;

  if (content) {
    postMessage(btoa(content));
  } else if (file) {
    if (file.type === 'image/svg+xml') {
      svgProcessor(file)
        .then((code) => optimize(code))
        .then((code) => {
          postMessage(`data:image/svg+xml;base64,${btoa(code)}`);
        })
        .catch((error) => postMessage(error));
    }
    try {
      const reader = new FileReader();
      reader.addEventListener('loadend', () => postMessage(reader.result));
      reader.readAsDataURL(file);
    } catch (error) {
      postMessage(error);
    }
  }
};
