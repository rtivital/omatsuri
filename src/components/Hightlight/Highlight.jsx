import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useClipboard from '../../hooks/use-clipboard';
import classes from './Highlight.styles.less';

export default function Highlight({ children, language }) {
  const { copy, copied } = useClipboard();

  return (
    <div className={classes.highlight}>
      <button
        type="button"
        className={cx(classes.copy, { [classes.copied]: copied })}
        onClick={() => copy(children)}
      >
        {copied ? 'Copied to clipboard' : 'Copy to clipboard'}
      </button>
      <SyntaxHighlighter language={language} style={coy}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

Highlight.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
