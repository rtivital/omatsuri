import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useClipboard } from 'xooks';
import { useTheme } from '../../ThemeProvider';
import CopyCodeButton from '../CopyCodeButton/CopyCodeButton';
import classes from './Highlight.styles.less';

export default function Highlight({ children }) {
  const { copy, copied } = useClipboard();
  const [theme] = useTheme();

  return (
    <div className={cx(classes.wrapper, classes[theme])}>
      <CopyCodeButton
        type="button"
        copied={copied}
        className={classes.copy}
        onClick={() => copy(children)}
      />
      <div className={classes.highlight}>
        <pre className={classes.code}>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}

Highlight.propTypes = {
  children: PropTypes.string.isRequired,
};
