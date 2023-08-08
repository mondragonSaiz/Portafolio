import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider(props) {
  const darkTheme = false;
  return <ThemeContext.Provider value={{ darkTheme }} {...props} />;
}
