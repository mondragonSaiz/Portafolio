import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ThemeProvider from './utils/ThemeContext';
import MainLayout from './components/Main';
import Portafolio from './components/Portafolio';
import Contact from './components/Contact';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {
  // const [colorTheme, setColorTheme] = useState(true);
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <MainLayout />;
    }
    if (currentPage === 'Portafolio') {
      return <Portafolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <MainLayout />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          <NavBar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          {renderPage()}
          <Footer />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
