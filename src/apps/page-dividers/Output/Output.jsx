import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../../components/Background/Background';
import Highlight from '../../../components/Highlight/Highlight';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import generateExample from './generate-example';
import { shapes } from '../Shape/Shape';
import classes from './Output.styles.less';

export default function Output({ values }) {
  return (
    <Background className={classes.wrapper}>
      <div className={classes.section}>
        <SettingsLabel>HTML code</SettingsLabel>
        <Highlight>{generateExample('html', values)}</Highlight>
      </div>

      <div className={classes.section}>
        <SettingsLabel>JSX code</SettingsLabel>
        <Highlight>{generateExample('jsx', values)}</Highlight>
      </div>
    </Background>
  );
}

Output.propTypes = {
  values: PropTypes.shape({
    position: PropTypes.oneOf(['top', 'bottom']).isRequired,
    direction: PropTypes.oneOf(['normal', 'reverse']).isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.keys(shapes)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};
