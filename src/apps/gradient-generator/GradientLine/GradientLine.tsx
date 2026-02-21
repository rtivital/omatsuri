import React, { useMemo, useState } from 'react';
import cx from 'clsx';
import { v4 } from 'uuid';
import { generateGradientColorValues } from '../generate-gradient-value';
import getRandomColor from './get-random-color';
import ColorStop from './ColorStop/ColorStop';
import classes from './GradientLine.styles.less';

interface GradientValue {
  key: string;
  color: string;
  position: number;
  opacity: number;
}

interface GradientHandlers {
  setState: (values: GradientValue[]) => void;
  remove: (index: number) => void;
  setItemProp: (index: number, prop: string, value: any) => void;
}

interface GradientLineProps {
  values: GradientValue[];
  handlers: GradientHandlers;
  className?: string;
}

export default function GradientLine({ values, handlers, className }: GradientLineProps) {
  const [lineProps, setLineProps] = useState(null);
  const parsedLineRect = useMemo(() => (lineProps ? JSON.parse(lineProps) : null), [lineProps]);
  const gradient = `linear-gradient(to right, ${generateGradientColorValues(values)})`;

  const handleColorAdd = (event) => {
    const rect = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const position = Math.round((clickPosition / rect.width) * 100);
    handlers.setState(
      values
        .concat({ color: getRandomColor(), position, opacity: 100, key: v4() })
        .sort((a, b) => a.position - b.position)
    );
  };

  const colorStops = values.map((value, index) => (
    <ColorStop
      key={value.key}
      values={values}
      value={value}
      handlers={handlers}
      lineRect={parsedLineRect}
      index={index}
    />
  ));

  return (
    <div className={cx(classes.gradientLine, className)}>
      <div className={classes.lineWrapper}>
        <div
          className={classes.line}
          style={{ backgroundImage: gradient }}
          onClick={handleColorAdd}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              handleColorAdd(event);
            }
          }}
          role="button"
          tabIndex={0}
          ref={(node) => node && setLineProps(JSON.stringify(node.getBoundingClientRect()))}
        />
      </div>
      {colorStops}
    </div>
  );
}
