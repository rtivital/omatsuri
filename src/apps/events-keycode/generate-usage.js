export default function generateUsage(event) {
  const modifiers = Object.entries({
    'event.altKey': event.altKey,
    'event.ctrlKey': event.ctrlKey,
    'event.metaKey': event.metaKey,
    'event.shiftKey': event.shiftKey,
  }).reduce((acc, keyInfo) => {
    if (keyInfo[1]) {
      return `${acc} && ${keyInfo[0]}`;
    }

    return acc;
  }, '');

  return `window.addEventListener('keydown', (event) => {
  if (event.code === '${event.code}'${modifiers}) {
    // do your stuff
  }
});`;
}
