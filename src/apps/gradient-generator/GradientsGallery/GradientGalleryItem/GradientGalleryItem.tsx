import React from 'react';
import cx from 'clsx';
import { useClipboard } from '@hooks';
import { useTheme } from '../../../../ThemeProvider';
import Background from '../../../../components/Background/Background';
import { generateGradientColorValues } from '../../generate-gradient-value';
import classes from './GradientGalleryItem.styles.less';

export default function GradientGalleryItem({ className, values, name, onEditorOpen }) {
  const [theme] = useTheme();
  const clipboard = useClipboard();
  const gradient = `linear-gradient(to bottom, ${generateGradientColorValues(values)})`;

  return (
    <Background className={cx(classes.item, classes[theme], className)}>
      <div className={classes.header}>
        <div className={classes.name}>{name}</div>
        <button
          className={cx(classes.copy, { [classes.copied]: clipboard.copied })}
          type="button"
          onClick={() => clipboard.copy(gradient)}
        >
          {clipboard.copied ? 'Copied' : 'Copy CSS'}
        </button>
      </div>
      <div className={classes.preview} style={{ backgroundImage: gradient }} />

      <button className={classes.control} type="button" onClick={() => onEditorOpen(values)}>
        Open in editor
      </button>
    </Background>
  );
}
