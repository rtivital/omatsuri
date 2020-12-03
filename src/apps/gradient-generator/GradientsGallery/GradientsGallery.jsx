import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 } from 'uuid';
import data from './data';
import Background from '../../../components/Background/Background';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import { generateGradientColorValues } from '../generate-gradient-value';
import classes from './GradientsGallery.styles.less';

export default function GradientsGallery({ className, handlers }) {
  const handleGradientPick = (gradient) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handlers.setState(gradient.values.map((value) => ({ ...value, key: v4() })));
  };

  const items = data.map((item) => (
    <Background className={classes.item} key={item.name}>
      <div className={classes.header}>
        <div className={classes.name}>{item.name}</div>
        <button className={classes.copy} type="button">
          Copy CSS
        </button>
      </div>
      <div
        className={classes.preview}
        style={{
          backgroundImage: `linear-gradient(to bottom, ${generateGradientColorValues(
            item.values
          )})`,
        }}
      />
      <button className={classes.control} type="button" onClick={() => handleGradientPick(item)}>
        Open in editor
      </button>
    </Background>
  ));

  return (
    <div className={cx(classes.gradientsGallery, className)}>
      <SettingsLabel className={classes.title}>Gradients Gallery</SettingsLabel>
      <div className={classes.items}>{items}</div>
    </div>
  );
}

GradientsGallery.propTypes = {
  className: PropTypes.string,
  handlers: PropTypes.shape({
    setState: PropTypes.func.isRequired,
  }).isRequired,
};
