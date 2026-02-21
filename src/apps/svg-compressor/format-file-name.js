export default function formatFileName(key) {
  if (typeof key !== 'string') {
    return null;
  }

  if (key !== 'input_file') {
    return key.split('_').slice(1).join('_');
  }

  return 'from input';
}
