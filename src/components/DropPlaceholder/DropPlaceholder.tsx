import React from 'react';
import cx from 'clsx';
import { useTheme } from '../../ThemeProvider';
import classes from './DropPlaceholder.styles.less';

interface DropPlaceholderProps {
  className?: string;
  children: React.ReactNode;
  onFileAdd: (file: File) => void;
  accepts?: string;
}

export default function DropPlaceholder({
  className,
  children,
  onFileAdd,
  accepts = 'image/svg+xml',
}: DropPlaceholderProps) {
  const [theme] = useTheme();

  return (
    <div className={cx(classes.placeholder, classes[theme], className)}>
      <div className={classes.label}>{children} or</div>
      <label className={classes.inputLabel} htmlFor="file-browse">
        Upload file{' '}
        <input
          className={classes.input}
          type="file"
          id="file-browse"
          accept={accepts}
          onChange={(event) => event.target.files[0] && onFileAdd(event.target.files[0])}
        />
      </label>
    </div>
  );
}
