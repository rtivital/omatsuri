import oc from 'open-color';

const ocGroups = [
  ['lime', 'cyan'],
  ['yellow', 'red'],
  ['teal', 'yellow'],
  ['teal', 'blue'],
  ['blue', 'cyan'],
  ['violet', 'indigo'],
  ['violet', 'pink'],
  ['lime', 'teal'],
  ['grape', 'pink'],
  ['lime', 'blue'],
  ['green', 'violet'],
  ['grape', 'violet'],
  ['pink', 'red'],
  ['green', 'blue'],
  ['violet', 'blue'],
  ['orange', 'yellow'],
];

export default [
  {
    name: 'Fade in',
    values: [
      { color: '#000000', position: 50, opacity: 0 },
      { color: '#000000', position: 100, opacity: 50 },
    ],
  },
  ...ocGroups.map((group) => ({
    name: `Open color: ${group[0]} – ${group[1]}`,
    values: [
      { color: oc[group[0]][6], position: 5, opacity: 100 },
      { color: oc[group[1]][4], position: 95, opacity: 100 },
    ],
  })),

  {
    name: 'Grass',
    values: [
      { color: '#d4fc79', position: 5, opacity: 100 },
      { color: '#96e6a1', position: 95, opacity: 100 },
    ],
  },
  {
    name: 'Winter Sky',
    values: [
      { color: '#a1c4fd', position: 10, opacity: 100 },
      { color: '#c2e9fb', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Selling Blue',
    values: [
      { color: '#4481eb', position: 10, opacity: 100 },
      { color: '#04befe', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Night',
    values: [
      { color: '#1e3c72', position: 10, opacity: 100 },
      { color: '#2a5298', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Ripe Peach',
    values: [
      { color: '#ed6ea0', position: 10, opacity: 100 },
      { color: '#ec8c69', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Selling orange',
    values: [
      { color: '#FBAB7E', position: 10, opacity: 100 },
      { color: '#F7CE68', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Sunset',
    values: [
      { color: '#FBDA61', position: 10, opacity: 100 },
      { color: '#FF5ACD', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Spring',
    values: [
      { color: '#faaca8', position: 10, opacity: 100 },
      { color: '#ddd6f3', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Cyan shine',
    values: [
      { color: '#2AFADF', position: 10, opacity: 100 },
      { color: '#4C83FF', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Noir',
    values: [
      { color: '#4b6cb7', position: 10, opacity: 100 },
      { color: '#182848', position: 90, opacity: 100 },
    ],
  },
  {
    name: 'Mother Russia',
    values: [
      { color: '#ffffff', position: 0, opacity: 100 },
      { color: '#ffffff', position: 33, opacity: 100 },
      { color: '#0139A6', position: 33, opacity: 100 },
      { color: '#0139A6', position: 66, opacity: 100 },
      { color: '#D52B1E', position: 66, opacity: 100 },
    ],
  },
];
