import React from 'react';
import cx from 'clsx';
import { Group, Text, UnstyledButton } from '@mantine/core';
import { useTheme } from '../../ThemeProvider';
import ThemeIcon from './ThemeIcon';
import classes from './ThemeControl.styles.module.css';

interface ThemeControlProps {
  className?: string;
}

export default function ThemeControl({ className }: ThemeControlProps) {
  const [theme, setTheme] = useTheme();

  return (
    <div className={cx(classes[theme], className)}>
      <UnstyledButton
        className={classes.control}
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label="Toggle theme"
      >
        <div className={classes.controlInner}>
          <Text className={classes.label} fz="sm" fw={600}>
            Toggle theme
          </Text>

          <Group className={classes.currentTheme} gap={5} wrap="nowrap">
            <ThemeIcon theme={theme} size={15} />
            <Text className={classes.name} fz="sm" fw={600}>
              {theme} theme
            </Text>
          </Group>
        </div>
      </UnstyledButton>
    </div>
  );
}
