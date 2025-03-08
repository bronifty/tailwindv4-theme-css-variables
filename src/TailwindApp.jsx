// App.js
import React from 'react';
import { ThemeProvider } from './TailwindThemeContext';
import ThemedComponent from './TailwindThemedComponent';
import NavBar from './Navbar';

function App() {
  return (
    <ThemeProvider>
      <div className="container-app">
        <NavBar />
        <div className="content-section">
          <h1 className="page-title">Tailwind CSS v4 Theme Demo</h1>
          <div className="max-w-2xl mx-auto">
            <ThemedComponent />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;