import {useTheme} from './ThemeContext2';
export default function ThemedComponent2() {
    const {theme, toggleTheme} = useTheme();
    return (
        <div style={{background: theme === 'dark' ? '#333' : '#ddd', color: theme === 'dark' ? '#ddd' : '#333' }}>
            <h1>ThemedComponent2</h1>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>toggleTheme</button>
        </div>
    )
}