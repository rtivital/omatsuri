import oc from 'open-color';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import Button from '../../components/Button/Button';
import useDocumentTitle from '../../hooks/use-document-title';
import ColorShadesList from './ColorShadesList/ColorShadesList';
import classes from './ColorShadesGenerator.styles.less';

export default function ColorShadesGenerator() {
  useDocumentTitle('Color shades generator');

  const [value, setValue] = useState([{ color: oc.violet[4], key: v4() }]);
  const canDelete = value.length > 1;

  const addColor = () => setValue((current) => [...current, { color: '#ffffff', key: v4() }]);

  const setColor = (index, color) =>
    setValue((current) => {
      const cloned = [...current];
      cloned[index] = { ...cloned[index], color };
      return cloned;
    });

  const removeColor = (index) =>
    setValue((current) => {
      const cloned = [...current];
      cloned.splice(index, 1);
      return cloned;
    });

  const colors = value.map((color, index) => (
    <ColorShadesList
      key={color.key}
      value={color.color}
      onChange={(c) => setColor(index, c)}
      onDelete={() => removeColor(index)}
      canDelete={canDelete}
    />
  ));

  return (
    <div>
      {colors}
      <div className={classes.control}>
        <Button onClick={addColor}>+ Add color</Button>
      </div>
    </div>
  );
}
