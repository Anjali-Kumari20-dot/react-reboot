import React, { createContext, useState } from 'react'

// createContext() gives you the ability to share global values (isDark, toggleTheme) across components.
const ThemeContext = createContext();

// ThemeProvider wraps your app and provides that context to everything inside.
const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };