import React, { useState } from 'react';
import useDocumentTitle from '../../hooks/use-document-title';
import Settings from './Settings/Settings';

export default function PageDividers() {
  useDocumentTitle('Curved page dividers');

  const [type, setType] = useState('waves');
  const [color, setColor] = useState('#ffffff');
  const [width, setWidth] = useState(125);
  const [height, setHeight] = useState(75);

  return (
    <div>
      <Settings
        values={{ type, color, width, height }}
        handlers={{
          onTypeChange: setType,
          onColorChange: setColor,
          onWidthChange: setWidth,
          onHeightChange: setHeight,
        }}
      />
    </div>
  );
}
