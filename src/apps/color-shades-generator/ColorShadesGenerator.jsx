import oc from 'open-color';
import React, { useState } from 'react';
import { v4 } from 'uuid';
import Button from '../../components/Button/Button';
import useDocumentTitle from '../../hooks/use-document-title';
import ColorShadesList from './ColorShadesList/ColorShadesList';
import Settings from './Settings/Settings';
import classes from './ColorShadesGenerator.styles.less';

const defaultPalette = Object.keys(oc)
  .filter((key) => key !== 'white' && key !== 'black')
  .map((key) => ({
    key: v4(),
    color: oc[key][4],
  }));

export default function ColorShadesGenerator() {
  useDocumentTitle('Color shades generator');

  const [value, setValue] = useState([{ color: '#ffffff', key: v4() }]);
  const [saturation, setSaturation] = useState(0.2);
  const [darken, setDarken] = useState(0.1);
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

  const removeAll = () => setValue([{ color: '#ffffff', key: v4() }]);
  const loadDefaultPalette = () => setValue(defaultPalette);

  const colors = value.map((color, index) => (
    <ColorShadesList
      key={color.key}
      value={color.color}
      onChange={(c) => setColor(index, c)}
      onDelete={() => removeColor(index)}
      canDelete={canDelete}
      saturation={saturation}
      darken={darken}
    />
  ));

  return (
    <div>
      <Settings
        darken={darken}
        onDarkenChange={setDarken}
        saturation={saturation}
        onSaturationChange={setSaturation}
        onPaletteLoad={loadDefaultPalette}
        onAllRemove={removeAll}
        canRemove={canDelete}
      />
      {colors}
      <div className={classes.control}>
        <Button onClick={addColor}>+ Add color</Button>
      </div>
    </div>
  );
}
