import oc from 'open-color';
import React from 'react';
import Swatch from './Swatch/Swatch';
import HexInput from '../../../components/HexInput/HexInput';
import classes from './ColorPicker.styles.less';

const predefinedColors = [
  oc.black,
  oc.red[5],
  oc.pink[5],
  oc.grape[5],
  oc.violet[5],
  oc.indigo[5],
  oc.blue[5],
  oc.cyan[5],
  oc.teal[5],
  oc.green[5],
  oc.lime[5],
  oc.yellow[5],
];

export default function ColorPicker({ value, onChange }) {
  const swatches = predefinedColors.map((color) => (
    <Swatch className={classes.swatch} key={color} value={color} onClick={() => onChange(color)} />
  ));

  return (
    <div>
      <div className={classes.swatches}>{swatches}</div>
      <HexInput className={classes.input} value={value} onChange={onChange} />
    </div>
  );
}
