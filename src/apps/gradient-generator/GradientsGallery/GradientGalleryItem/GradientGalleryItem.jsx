import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useClipboard } from 'xooks';
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

GradientGalleryItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onEditorOpen: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      position: PropTypes.number.isRequired,
      opacity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
