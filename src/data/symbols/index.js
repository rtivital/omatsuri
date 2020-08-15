import Fuse from 'fuse.js';

import arrows from './arrows-symbols';
import fractions from './fractions-symbols';
import math from './math-symbols';
import punctuation from './punctuation-symbols';
import special from './special-symbols';
import mostUsed from './most-used-symbols';

const f = (data) => new Fuse(data, { keys: ['name'] });

export default [
  { title: 'Most used', data: mostUsed, fuse: f(mostUsed) },
  { title: 'Arrows', data: arrows, fuse: f(arrows) },
  { title: 'Math and fractions', data: [...fractions, ...math], fuse: f([...fractions, ...math]) },
  { title: 'Punctuation', data: punctuation, fuse: f(punctuation) },
  { title: 'Special', data: special, fuse: f(special) },
];
