import React from 'react';
import { Button, Center, Text } from '@mantine/core';
import { Dropzone as MantineDropzone } from '@mantine/dropzone';
import { useTheme } from '../../ThemeProvider';
import SettingsLabel from '../SettingsLabel/SettingsLabel';
import Background from '../Background/Background';
import DropPlaceholder from '../DropPlaceholder/DropPlaceholder';
import example from './example';
import classes from './SvgInput.styles.module.css';

interface SvgInputProps {
  value: string;
  onChange: (value: string) => void;
  errors: string[];
  onFilesDrop: (files: File[]) => void;
  dropLabel: string;
  formatFileName?: (fileName: string) => string;
}

export default function SvgInput({
  value,
  onChange,
  errors,
  onFilesDrop,
  dropLabel,
  formatFileName = (f) => f,
}: SvgInputProps) {
  const [theme] = useTheme();
  const formattedErrors = errors.map((error, index) => (
    <p className={classes.error} key={index}>
      Failed to parse or minify file {formatFileName(error)}
    </p>
  ));

  return (
    <div className={classes[theme]}>
      <MantineDropzone.FullScreen
        onDrop={onFilesDrop}
        accept={['image/svg+xml']}
        activateOnClick={false}
        styles={{ fullScreen: { backgroundColor: 'rgba(0, 255, 255, 0.9)', zIndex: 10 } }}
      >
        <Center h="100%">
          <Text fz={40} fw={900} ta="center" c="dark.9" style={{ letterSpacing: -2 }}>
            Drop files to browser window
          </Text>
        </Center>
      </MantineDropzone.FullScreen>
      <DropPlaceholder onFileAdd={(file) => onFilesDrop([file])}>{dropLabel}</DropPlaceholder>
      <Background className={classes.wrapper}>
        <div className={classes.header}>
          <SettingsLabel className={classes.title}>Paste SVG markup</SettingsLabel>
          <Button variant="light" color="violet" onClick={() => onChange(example)}>
            Load example
          </Button>
        </div>
        <textarea
          placeholder="Paste SVG markup here"
          className={classes.input}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        {formattedErrors.length > 0 && <div className={classes.errors}>{formattedErrors}</div>}
      </Background>
    </div>
  );
}
