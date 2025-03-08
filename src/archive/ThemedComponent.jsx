// ThemedComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';

function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#ddd' : '#333', color: theme === 'light' ? '#333' : '#ddd' }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;
