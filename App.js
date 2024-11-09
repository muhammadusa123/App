import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';

function App() {
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState('light');

  // Toggle function to switch between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Inline styles for light and dark themes
  const lightThemeStyles = {
    backgroundColor: '#ffffff',
    color: '#000000',
  };

  const darkThemeStyles = {
    backgroundColor: '#121212',
    color: '#ffffff',
  };

  return (
    <div style={theme === 'light' ? lightThemeStyles : darkThemeStyles}>
      {/* Pass toggleTheme to Navbar */}
      <Navbar title="Textutils" aboutText="About utils" toggleTheme={toggleTheme} theme={theme} />

      <div className="container mt-4">
        <Textform label="Enter Your Text here" />
      </div>

      <div className="container mt-4">
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
