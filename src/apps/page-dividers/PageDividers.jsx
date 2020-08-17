import React, { useState } from 'react';
import useDocumentTitle from '../../hooks/use-document-title';
import Settings from './Settings/Settings';
import Preview from './Preview/Preview';

export default function PageDividers() {
  useDocumentTitle('Curved page dividers');

  const [type, setType] = useState('waves');
  const [color, setColor] = useState('#ffffff');
  const [width, setWidth] = useState(125);
  const [height, setHeight] = useState(75);
  const [position, setPosition] = useState('top');
  const [direction, setDirection] = useState('normal');

  const values = { type, color, width, height, position, direction };
  const handlers = {
    onTypeChange: setType,
    onColorChange: setColor,
    onWidthChange: setWidth,
    onHeightChange: setHeight,
    onPositionChange: setPosition,
    onDirectionChange: setDirection,
  };

  return (
    <div>
      <Settings values={values} handlers={handlers} />
      <Preview values={values} />
    </div>
  );
}
