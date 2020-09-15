import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import cx from 'classnames';
import { useClipboard } from 'xooks';
import HexInput from '../../../components/HexInput/HexInput';
import Background from '../../../components/Background/Background';
import classes from './ColorShadesList.styles.less';

function generateShades({ steps, value, saturation, darken }) {
  let current = Color(value);
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
  const clipboardAll = useClipboard();
  const clipboard = useClipboard({ timeout: 500 });
  const copyAll = () =>
    clipboardAll.copy(
      JSON.stringify(generateShades({ steps: 10, value, saturation, darken }), null, 2)
    );

  const shades = generateShades({ steps: 10, value, saturation, darken }).map((shade, index) => (
    <button
      type="button"
      key={index}
      className={classes.shade}
      onClick={() => clipboard.copy(shade)}
    >
      <div className={classes.preview} style={{ backgroundColor: shade }} />
      <div className={classes.value}>{shade}</div>
    </button>
  ));

  return (
    <Background className={cx(classes.wrapper, { [classes.copied]: clipboard.copied })}>
      <div className={classes.header}>
        <HexInput value={value} onChange={onChange} />

        <div className={classes.controls}>
          <button
            className={cx(classes.copyAll, { [classes.copyAllCopied]: clipboardAll.copied })}
            type="button"
            onClick={copyAll}
          >
            {clipboardAll.copied ? 'Copied' : 'Copy all values'}
          </button>

          {canDelete && (
            <button type="button" className={classes.remove} onClick={onDelete}>
              Remove
            </button>
          )}
        </div>
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
