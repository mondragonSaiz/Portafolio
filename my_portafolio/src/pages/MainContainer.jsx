import React from 'react';
import MainLayout from '../components/Main';
import Portafolio from '../components/Portafolio';
import Contact from '../components/Contact';

import Footer from '../components/Footer';
import Resume from '../components/Resume';

import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
export default function MainContainer({ currentPage }) {
  console.log('PLEASE', ThemeContext);
  const ctx = useContext(ThemeContext);
  const { themeGlobalState } = ctx;

  const themeStyle = {
    backgroundColor: themeGlobalState.darkTheme ? '#5c6868' : '#eaeff2',
    backgroundImage: themeGlobalState.darkTheme
      ? 'linear-gradient(160deg, #5c6868 0%, #313b3a 100%)'
      : 'linear-gradient(62deg, #eaeff2 0%, #f9e8e6 100%)',
  };
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
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <MainLayout />;
  };
  return (
    <main style={themeStyle}>
      {renderPage()}
      <Footer />
    </main>
  );
}
