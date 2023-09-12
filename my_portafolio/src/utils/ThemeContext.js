import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducers';
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider(props) {
  const initialState = {
    darkTheme: false,
  };
  const [themeGlobalState, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider
      value={{
        themeGlobalState,
        dispatch,
      }}
      {...props}
    />
  );
}
