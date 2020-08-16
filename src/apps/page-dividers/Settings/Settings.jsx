import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../components/Select/Select';
import Background from '../../../components/Background/Background';
import { shapes } from '../Shape/Shape';
import classes from './Settings.styles.less';

const data = Object.keys(shapes).map((shape) => ({
  value: shape,
  label: (shape.charAt(0).toUpperCase() + shape.slice(1)).replace('_', ' '),
}));

export default function Settings({ values, handlers }) {
  return (
    <Background className={classes.wrapper}>
      <Select
        data={data}
        value={values.type}
        onChange={handlers.onTypeChange}
        id="shape-select"
        label="Shape type"
      />
    </Background>
  );
}

Settings.propTypes = {
  values: PropTypes.shape({
    type: PropTypes.oneOf(Object.keys(shapes)).isRequired,
  }),

  handlers: PropTypes.shape({
    onTypeChange: PropTypes.func.isRequired,
  }).isRequired,
};
