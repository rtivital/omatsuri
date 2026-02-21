import processSvgFile from '../utils/process-svg-file';

onmessage = (event) => {
  const { file, content } = event.data;

  if (content) {
    postMessage(btoa(content));
  } else if (file) {
    if (file.type === 'image/svg+xml') {
      processSvgFile(file)
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
