import oc from 'open-color';
import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { useDocumentTitle, useLocalStorage } from '@hooks';
import Button from '../../components/Button/Button';
import ColorShadesList from './ColorShadesList/ColorShadesList';
import Settings from './Settings/Settings';
import classes from './ColorShadesGenerator.styles.less';

const defaultPalette = Object.keys(oc)
  .filter((key) => key !== 'white' && key !== 'black')
  .map((key) => ({
    key: v4(),
    color: oc[key][4],
  }));

const INITIAL_VALUES = {
  value: [{ color: '#ffffff', key: v4() }],
  saturation: -0.2,
  darken: 0.1,
};

export default function ColorShadesGenerator() {
  useDocumentTitle('Color shades generator');

  const ls = useLocalStorage({ key: '@omatsuri', delay: 1000 });
  const initialValues = ls.retrieve() || INITIAL_VALUES;

  const [value, setValue] = useState(initialValues.value);
  const [saturation, setSaturation] = useState(initialValues.saturation);
  const [darken, setDarken] = useState(initialValues.darken);
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

  useEffect(() => {
    ls.save({ value, saturation, darken });
    return ls.cancel;
  }, [value, saturation, darken]);

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
