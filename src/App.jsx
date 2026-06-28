import React from 'react';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import { AppProvider, useApp } from './context/AppContext';

function MainAppContent() {
  const { currentPage, setCurrentPage } = useApp();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  if (currentPage === 'about') {
    return <AboutPage onBack={() => setCurrentPage('home')} />;
  }

  return <Home />;
}

function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
