import React from 'react';
import Color from 'color';
import cx from 'clsx';
import { useClipboard } from '@hooks';
import Scrollbars from 'react-custom-scrollbars-2';
import { useTheme } from '../../../ThemeProvider';
import HexInput from '../../../components/HexInput/HexInput';
import Background from '../../../components/Background/Background';
import classes from './ColorShadesList.styles.less';

function generateShades({ steps, value, saturation, darken }) {
  let dark = Color(value);
  let light = Color(value);

  const shades = [dark.hex()];
  const tints = [];

  for (let i = 1; i < steps; i += 1) {
    dark = dark.darken(darken).saturate(saturation);
    light = light.lighten(darken).saturate(saturation);

    dark.hex().toLowerCase() !== '#000000' && shades.push(dark.hex());
    light.hex().toLowerCase() !== '#ffffff' && tints.push(light.hex());
  }

  return [...tints.reverse(), ...shades];
}

export default function ColorShadesList({
  value,
  onChange,
  onDelete,
  canDelete,
  saturation,
  darken,
}) {
  const [theme] = useTheme();
  const clipboardAll = useClipboard();
  const clipboard = useClipboard({ timeout: 500 });
  const values = generateShades({ steps: 7, value, saturation, darken });
  const copyAll = () => clipboardAll.copy(JSON.stringify(values, null, 2));

  const items = values.map((shade, index) => (
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
    <Background
      className={cx(classes.wrapper, classes[theme], { [classes.copied]: clipboard.copied })}
    >
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
      <Scrollbars style={{ width: '100%', height: 110 }}>
        <div className={classes.shades}>{items}</div>
      </Scrollbars>
    </Background>
  );
}
