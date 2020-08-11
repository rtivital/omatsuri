import React, { useState } from 'react';
import Settings from './Settings/Settings';

const predefinedSizes = {
  sm: { width: 10, height: 6 },
  md: { width: 22, height: 12 },
  lg: { width: 54, height: 36 },
  xl: { width: 128, height: 94 },
};

export default function TriangleGenerator() {
  const [direction, onDirectionChange] = useState('bottom');
  const [width, onWidthChange] = useState(20);
  const [height, onHeightChange] = useState(18);

  const setPredefinedSize = size => {
    if (size in predefinedSizes) {
      const values = predefinedSizes[size];
      onWidthChange(values.width);
      onHeightChange(values.height);
    }
  };

  return (
    <div>
      <Settings
        values={{ direction, height, width }}
        handlers={{ onDirectionChange, onWidthChange, onHeightChange, setPredefinedSize }}
      />
    </div>
  );
}
