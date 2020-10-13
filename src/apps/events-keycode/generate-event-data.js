const modifiers = ['Alt', 'Control', 'Shift', 'Meta'].reduce((acc, modifier) => {
  acc.push(`${modifier}Left`, `${modifier}Right`);
  return acc;
}, []);

const isSpecialKey = (event) => modifiers.includes(event.code);

export default function generateEventData(event) {
  const data = {
    altKey: event.altKey,
    ctrlKey: event.ctrlKey,
    metaKey: event.metaKey,
    shiftKey: event.shiftKey,
    key: event.key,
  };

  if (!isSpecialKey(event)) {
    data.code = event.code;
  }

  return data;
}
