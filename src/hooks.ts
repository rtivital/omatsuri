import { useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import {
  useClipboard as useMantineClipboard,
  useColorScheme as useMantineColorScheme,
  useDocumentTitle as useMantineDocumentTitle,
  useListState as useMantineListState,
  useLocalStorage as useMantineLocalStorage,
} from '@mantine/hooks';

export function useDocumentTitle(title: string): void {
  useMantineDocumentTitle(title);
}

export function useColorScheme(): 'light' | 'dark' {
  return useMantineColorScheme();
}

export function useClipboard(config?: { timeout?: number }) {
  return useMantineClipboard(config);
}

export function useClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  handler: () => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;
      if (!node) {
        return;
      }
      if (event.target instanceof Node && !node.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export interface LocalStorageHook<T = any> {
  save: (value: T) => void;
  retrieve: () => T;
  retrieveAndClean: () => T;
  cancel: () => void;
}

export function useLocalStorage<T = any>(config: {
  key: string;
  delay?: number;
}): LocalStorageHook<T> {
  const { key, delay = 0 } = config;
  const [value, setValue, removeValue] = useMantineLocalStorage<T | null>({
    key,
    defaultValue: null,
    getInitialValueInEffect: false,
  });

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const api = useMemo<LocalStorageHook<T>>(
    () => ({
      save(nextValue: T) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        if (delay > 0) {
          timeoutRef.current = setTimeout(() => {
            setValue(nextValue);
            timeoutRef.current = null;
          }, delay);
        } else {
          setValue(nextValue);
        }
      },

      retrieve() {
        return value as T;
      },

      retrieveAndClean() {
        const currentValue = value as T;
        removeValue();
        return currentValue;
      },

      cancel() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      },
    }),
    [delay, removeValue, setValue, value]
  );

  return api;
}

export function useListState<T = any>(initial: T[]) {
  return useMantineListState<T>(initial);
}

export function useIntermediateValue(config: {
  value: number | string;
  onChange: (value: any) => void;
  rule: (value: any) => boolean;
  format: (value: any) => any;
}) {
  const { value, onChange, rule, format } = config;
  const [intermediateValue, setIntermediateValue] = useState<any>(value);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    setIntermediateValue(value);
  }, [value]);

  const handleChange = (nextValue: any) => {
    setIntermediateValue(nextValue);
    const formattedValue = format(nextValue);
    setValid(rule(formattedValue));
  };

  const handleSubmit = (nextValue: any) => {
    const formattedValue = format(nextValue);
    const isValid = rule(formattedValue);
    setValid(isValid);

    if (isValid) {
      onChange(formattedValue);
      setIntermediateValue(formattedValue);
    } else {
      setIntermediateValue(value);
    }
  };

  return {
    intermediateValue,
    valid,
    handleChange,
    handleSubmit,
  };
}
