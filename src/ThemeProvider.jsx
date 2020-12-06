import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useColorScheme, useLocalStorage } from 'xooks';

export const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeProvider was not found');
  }

  return [context.theme, context.setTheme];
}

export default function ThemeProvider({ children }) {
  const ls = useLocalStorage({ key: '@omatsuri/theme', delay: 10 });

  const systemTheme = useColorScheme();
  const [userTheme, setUserTheme] = useState(ls.retrieve() || null);

  const handleUserThemeChange = (theme) => {
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

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
