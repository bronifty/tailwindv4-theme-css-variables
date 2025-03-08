// App.js
import React from 'react';
import { ThemeProvider } from './TailwindThemeContext';
import ThemedComponent from './TailwindThemedComponent';
import NavBar from './Navbar';

function App() {
  return (
    <ThemeProvider>
     
        <NavBar />
       
          <ThemedComponent />
     
    </ThemeProvider>
  );
}

export default App;