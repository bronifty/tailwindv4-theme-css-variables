import {useTheme} from './TailwindThemeContext';

export default function TailwindThemedComponent() {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className="max-w-md mx-auto my-8 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Theme Switcher</h2>
            <p className="mb-4">Current theme: <span className="font-semibold">{theme}</span></p>
            
            <button 
                onClick={toggleTheme}
                className="btn-primary"
            >
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
        </div>
    )
}