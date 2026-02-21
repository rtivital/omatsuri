import React from 'react';
import cx from 'clsx';
import { v4 } from 'uuid';
import data from './data';
import SettingsLabel from '../../../components/SettingsLabel/SettingsLabel';
import GradientGalleryItem from './GradientGalleryItem/GradientGalleryItem';
import classes from './GradientsGallery.styles.less';

interface GradientsGalleryProps {
  className?: string;
  handlers: {
    setState: (values: any[]) => void;
  };
}

export default function GradientsGallery({ className, handlers }: GradientsGalleryProps) {
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
