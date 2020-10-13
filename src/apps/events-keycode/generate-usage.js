import generateEventData from './generate-event-data';

export default function generateUsage(event) {
  const data = generateEventData(event);

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

  const parsedModifiers = data.code ? modifiers : modifiers.slice(4);

  return `window.addEventListener('keydown', (event) => {
  if (${data.code ? `event.code === '${event.code}'` : ''}${parsedModifiers}) {
    // do your stuff
  }
});`;
}
