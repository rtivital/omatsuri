import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import HexInput from '../../../components/HexInput/HexInput';
import Background from '../../../components/Background/Background';
import classes from './ColorShadesList.styles.less';

function generateShades({ steps, value, saturation, darken }) {
  let current = color(value);
  const shades = [current.hex()];
  for (let i = 1; i < steps; i += 1) {
    current = current.darken(darken).desaturate(saturation);
    shades.push(current.hex());
  }

  return shades;
}

export default function ColorShadesList({
  value,
  onChange,
  onDelete,
  canDelete,
  saturation,
  darken,
}) {
  const shades = generateShades({ steps: 10, value, saturation, darken }).map((shade, index) => (
    <div key={index} className={classes.shade}>
      <div className={classes.preview} style={{ backgroundColor: shade }} />
      <button type="button" className={classes.value}>
        {shade}
      </button>
    </div>
  ));

  return (
    <Background className={classes.wrapper}>
      <div className={classes.controls}>
        <HexInput value={value} onChange={onChange} />
        {canDelete && (
          <button type="button" className={classes.remove} onClick={onDelete}>
            Remove
          </button>
        )}
      </div>
      <div className={classes.shades}>{shades}</div>
    </Background>
  );
}

ColorShadesList.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
  saturation: PropTypes.number.isRequired,
  darken: PropTypes.number.isRequired,
};
