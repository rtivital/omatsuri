import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { v4 } from 'uuid';
import data from './data';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import GradientGalleryItem from './GradientGalleryItem/GradientGalleryItem';
import classes from './GradientsGallery.styles.less';

export default function GradientsGallery({ className, handlers }) {
  const handleGradientPick = (values) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handlers.setState(values.map((value) => ({ ...value, key: v4() })));
  };

  const items = data.map((item) => (
    <GradientGalleryItem
      key={item.name}
      values={item.values}
      name={item.name}
      onEditorOpen={handleGradientPick}
      className={classes.item}
    />
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
