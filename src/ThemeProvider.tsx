import React, { createContext, useState, useContext } from 'react';
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

  return (
    <ThemeContext.Provider
      value={{
        theme: userTheme || systemTheme,
        setTheme: handleUserThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
