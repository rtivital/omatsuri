import oc from 'open-color';
import React, { useState } from 'react';
import Settings from './Settings/Settings';
import TrianglePreview from './TrianglePreview/TrianglePreview';

const predefinedSizes = {
  sm: { width: 10, height: 6 },
  md: { width: 22, height: 12 },
  lg: { width: 54, height: 36 },
  xl: { width: 128, height: 94 },
};

function getActivePredefinedSize({ width, height }) {
  return Object.keys(predefinedSizes).find(
    size => predefinedSizes[size].with === width && predefinedSizes.height === height
  );
}

export default function TriangleGenerator() {
  const [direction, onDirectionChange] = useState('bottom');
  const [width, onWidthChange] = useState(predefinedSizes.lg.width);
  const [height, onHeightChange] = useState(predefinedSizes.lg.height);
  const [color, onColorChange] = useState(oc.violet[7]);

  const setPredefinedSize = size => {
    if (size in predefinedSizes) {
      const values = predefinedSizes[size];
      onWidthChange(values.width);
      onHeightChange(values.height);
    }
  };

  const values = {
    activePredefinedSize: getActivePredefinedSize({ width, height }),
    direction,
    height,
    width,
    color,
  };

  const handlers = {
    onDirectionChange,
    onWidthChange,
    onHeightChange,
    setPredefinedSize,
    onColorChange,
  };

  return (
    <div>
      <Settings values={values} handlers={handlers} />

      <div>
        <TrianglePreview values={values} />
      </div>
    </div>
  );
}
