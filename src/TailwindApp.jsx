// App.js
import React from 'react';
import { ThemeProvider } from './TailwindThemeContext';
import ThemedComponent from './TailwindThemedComponent';
import NavBar from './Navbar';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-300">
        <NavBar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Tailwind CSS v4 Theme Switching
          </h1>
          <ThemedComponent />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;