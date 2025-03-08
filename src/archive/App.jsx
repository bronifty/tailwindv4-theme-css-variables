// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext2';
import ThemedComponent from './ThemedComponent2';
import NavBar from './Navbar';
function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <h1>React Context Example</h1>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;