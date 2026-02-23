import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@hooks';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeProvider was not found');
  }

  return [context.theme, context.setTheme] as const;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const ls = useLocalStorage({ key: '@omatsuri/theme', delay: 10 });

  const systemTheme = useColorScheme();
  const [userTheme, setUserTheme] = useState<Theme | null>(ls.retrieve() || null);

  const handleUserThemeChange = (theme: Theme) => {
    ls.save(theme);
    setUserTheme(theme);
  };

  const resolvedTheme = userTheme || systemTheme;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== 'j' || (!event.metaKey && !event.ctrlKey)) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      event.preventDefault();
      handleUserThemeChange(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resolvedTheme]);

  return (
    <MantineProvider
      forceColorScheme={resolvedTheme}
      defaultColorScheme="auto"
      theme={createTheme({
        primaryColor: 'violet',
        fontFamily: '"Source Sans Pro", sans-serif',
        defaultRadius: 'md',
      })}
    >
      <ThemeContext.Provider
        value={{
          theme: resolvedTheme,
          setTheme: handleUserThemeChange,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </MantineProvider>
  );
}
