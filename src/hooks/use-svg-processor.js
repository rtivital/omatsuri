export default function useSvgProcessor() {
  return (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.addEventListener('load', (event) => resolve({ text: event.target.result, file }));
      reader.addEventListener('error', reject);
    });
}
