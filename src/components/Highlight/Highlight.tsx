import React from 'react';
import cx from 'clsx';
import { useClipboard } from '@hooks';
import { useTheme } from '../../ThemeProvider';
import CopyCodeButton from '../CopyCodeButton/CopyCodeButton';
import classes from './Highlight.styles.less';

interface HighlightProps {
  children: string;
}

export default function Highlight({ children }: HighlightProps) {
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
