import React from 'react';
const ThemeContext = React.createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => React.useContext(ThemeContext);