import React from 'react';
import PropTypes from 'prop-types';
import useClipboard from '../../hooks/use-clipboard';
import CopyCodeButton from '../CopyCodeButton/CopyCodeButton';
import classes from './Highlight.styles.less';

export default function Highlight({ children }) {
  const { copy, copied } = useClipboard();

  return (
    <div className={classes.wrapper}>
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
