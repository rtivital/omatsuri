import React from 'react';
import PropTypes from 'prop-types';
import SliderInput from '../../../components/SliderInput/SliderInput';
import Background from '../../../components/Background/Background';
import Button from '../../../components/Button/Button';
import classes from './Settings.styles.less';

export default function Settings({
  darken,
  onDarkenChange,
  saturation,
  onSaturationChange,
  onPaletteLoad,
  onAllRemove,
  canRemove,
}) {
  return (
    <Background className={classes.wrapper}>
      <div className={classes.settings}>
        <div className={classes.settingsControl}>
          <div className={classes.label}>Darken by, %</div>
          <SliderInput
            value={Math.round(darken * 100)}
            onChange={(value) => onDarkenChange(value / 100)}
            min={1}
            max={100}
          />
        </div>

        <div className={classes.settingsControl}>
          <div className={classes.label}>Desaturate by, %</div>
          <SliderInput
            value={Math.round(saturation * 100)}
            onChange={(value) => onSaturationChange(value / 100)}
            min={1}
            max={100}
          />
        </div>
      </div>
      <div className={classes.controls}>
        <Button className={classes.control} onClick={onPaletteLoad}>
          Load default palette
        </Button>
        {canRemove && (
          <Button className={classes.control} onClick={onAllRemove} theme="red">
            Remove all
          </Button>
        )}
      </div>
    </Background>
  );
}

Settings.propTypes = {
  darken: PropTypes.number.isRequired,
  onDarkenChange: PropTypes.func.isRequired,
  saturation: PropTypes.number.isRequired,
  onSaturationChange: PropTypes.func.isRequired,
  onPaletteLoad: PropTypes.func.isRequired,
  onAllRemove: PropTypes.func.isRequired,
  canRemove: PropTypes.bool.isRequired,
};
