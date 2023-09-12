import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ThemeProvider from './utils/ThemeContext';
import MainLayout from './components/Main';
import Portafolio from './components/Portafolio';
import Contact from './components/Contact';

import React, { useState, useContext } from 'react';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';
import MainContainer from './pages/MainContainer';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <ThemeProvider>
        <header className="App-header">
          <NavBar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </header>

        <MainContainer currentPage={currentPage} />
      </ThemeProvider>
    </div>
  );
}

export default App;
