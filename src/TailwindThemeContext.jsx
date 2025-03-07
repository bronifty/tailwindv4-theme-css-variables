import React from 'react';
const ThemeContext = React.createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState('dark'); // Start with light theme by default
    
    // Apply theme to document on initial render and when theme changes
    React.useEffect(() => {
        // Apply the theme to the html element
        document.documentElement.setAttribute('data-theme', theme);
        
        // You can also log to verify the change is happening
        console.log('Theme changed to:', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        // Update the theme state with the new value
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        // The data-theme attribute will be updated by the useEffect
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => React.useContext(ThemeContext);
