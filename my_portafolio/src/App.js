import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ThemeProvider from './utils/ThemeContext';
import MainLayout from './components/Main';
import Portafolio from './components/Portafolio';
import Contact from './components/Contact';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';
function App() {
  const [colorTheme, setColorTheme] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const themeStyle = {
    backgroundColor: colorTheme ? '#5c6868' : '#eaeff2',
    backgroundImage: colorTheme
      ? 'linear-gradient(160deg, #5c6868 0%, #313b3a 100%)'
      : 'linear-gradient(62deg, #eaeff2 0%, #f9e8e6 100%)',
  };
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <MainLayout colorTheme={colorTheme} />;
    }
    if (currentPage === 'Portafolio') {
      return <Portafolio colorTheme={colorTheme} />;
    }
    if (currentPage === 'Contact') {
      return <Contact colorTheme={colorTheme} />;
    }
    if (currentPage === 'Resume') {
      return <Resume colorTheme={colorTheme} />;
    }
    return <MainLayout />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <ThemeProvider>
        <header className="App-header">
          <NavBar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        </header>
      </ThemeProvider>
      <main style={themeStyle}>
        {renderPage()}

        <Footer />
      </main>
    </div>
  );
}

export default App;
