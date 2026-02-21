import React from 'react';
import cx from 'clsx';
import generateGradientValue from '../generate-gradient-value';
import classes from './GradientPreview.styles.less';

interface GradientValue {
  color: string;
  position: number;
  opacity: number;
}

interface GradientPreviewProps {
  values: GradientValue[];
  angle: number;
  className?: string;
  type: 'linear' | 'radial';
}

export default function GradientPreview({ values, angle, className, type }: GradientPreviewProps) {
  const gradient = generateGradientValue({ angle, values, type });

  return (
    <div className={cx(classes.preview, className)}>
      <div className={classes.body} style={{ backgroundImage: gradient }} />
    </div>
  );
}
