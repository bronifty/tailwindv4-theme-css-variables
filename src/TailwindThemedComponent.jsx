import {useTheme} from './TailwindThemeContext';

export default function TailwindThemedComponent() {
    const {theme, toggleTheme} = useTheme();
    
    return (
        <div className="card">
            <h2 className="card-header">Theme Demonstration</h2>
            
            <div className="card-body">
                <p>Current theme: <span className="font-semibold">{theme}</span></p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <button className="btn-primary">Primary Button</button>
                    <button className="btn-secondary">Secondary Button</button>
                    <button className="btn-accent">Accent Button</button>
                </div>
            </div>
            
            <div className="card-footer">
                {/* <button 
                    onClick={toggleTheme}
                    className="btn-primary"
                >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button> */}
            </div>
        </div>
    )
}