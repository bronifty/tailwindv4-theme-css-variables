// NavBar.jsx
import React from 'react';
import { useTheme } from './TailwindThemeContext';

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="nav-container">
      <div className="nav-menu">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
      <button 
        onClick={toggleTheme} 
        className="btn-secondary"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

export default NavBar;