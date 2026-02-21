import React from 'react';
import cx from 'clsx';
import Highlight from '../../../components/Highlight/Highlight';
import Background from '../../../components/Background/Background';
import generateGradientValue from '../generate-gradient-value';
import classes from './GradientCode.styles.less';

interface GradientValue {
  color: string;
  position: number;
  opacity: number;
}

interface GradientCodeProps {
  className?: string;
  values: GradientValue[];
  angle: number;
  type: 'linear' | 'radial';
}

export default function GradientCode({ className, values, angle, type }: GradientCodeProps) {
  const gradient = generateGradientValue({ values, angle, type });

  return (
    <Background className={cx(classes.gradientCode, className)}>
      <div className={classes.section}>
        <div className={classes.title}>CSS</div>
        <Highlight>{`background-image: ${gradient};`}</Highlight>
      </div>

      <div className={classes.section}>
        <div className={classes.title}>JavaScript</div>
        <Highlight>{`backgroundImage: '${gradient}',`}</Highlight>
      </div>
    </Background>
  );
}
