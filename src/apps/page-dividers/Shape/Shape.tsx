import React from 'react';

import Waves from './Waves';
import WavesOpaque from './WavesOpaque';
import Tilt from './Tilt';
import Triangles from './Triangles';

export const shapes = {
  tilt: Tilt,
  waves: Waves,
  waves_opaque: WavesOpaque,
  triangles: Triangles,
};

export default function Shape({ shape, ...others }) {
  if (shape in shapes) {
    const Component = shapes[shape];
    return <Component {...others} />;
  }

  return null;
}
