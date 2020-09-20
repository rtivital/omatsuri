import Fuse from 'fuse.js';

import arrows from './arrows-symbols';
import fractions from './fractions-symbols';
import math from './math-symbols';
import punctuation from './punctuation-symbols';
import special from './special-symbols';
import mostUsed from './most-used-symbols';

const f = (data) => new Fuse(data, { keys: ['name'] });

export default {
  'Most used': { data: mostUsed, fuse: f(mostUsed) },
  Arrows: { data: arrows, fuse: f(arrows) },
  'Math and fractions': { data: [...fractions, ...math], fuse: f([...fractions, ...math]) },
  Punctuation: { data: punctuation, fuse: f(punctuation) },
  Special: { data: special, fuse: f(special) },
};
