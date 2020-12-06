import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';
import HexInput from '../../../components/HexInput/HexInput';
import SliderInput from '../../../components/SliderInput/SliderInput';
import X from './X';
import classes from './GradientColors.styles.less';

export default function GradientColors({ className, values, handlers }) {
  const [theme] = useTheme();

  const items = values.map((value, index) => (
    <div className={classes.color} key={value.key}>
      <div className={classes.field}>
        <HexInput
          value={value.color}
          onChange={(color) => handlers.setItemProp(index, 'color', color)}
        />
      </div>
      <div className={classes.field}>
        <SliderInput
          value={value.opacity}
          onChange={(opacity) => handlers.setItemProp(index, 'opacity', opacity)}
          min={0}
          max={100}
          trackSize={100}
        />
      </div>
      {values.length > 2 && (
        <div className={classes.field}>
          <button
            className={classes.remove}
            type="button"
            onClick={() => handlers.remove(index)}
            title="Remove color stop"
          >
            <X />
          </button>
        </div>
      )}
    </div>
  ));

  return (
    <div className={cx(classes.colors, classes[theme], className)}>
      <div className={classes.header}>
        <div className={classes.label} style={{ width: 258 }}>
          Color
        </div>
        <div className={classes.label}>Opacity, %</div>
      </div>
      <div className={classes.items}>{items}</div>
    </div>
  );
}

GradientColors.propTypes = {
  className: PropTypes.string,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,

  handlers: PropTypes.shape({
    setItemProp: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
  }).isRequired,
};
