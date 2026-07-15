import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import BlindersPage from './pages/BlindersPage';
import BracePage from './pages/BracePage';
import PhilPage from './pages/PhilPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="prototype-banner" role="note">
          Archived product-site prototype — concepts only, with no sales or downloads.
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="flex-grow">
                <HomePage />
              </main>
              <Footer />
            </>
          } />
          <Route path="/blinders" element={<BlindersPage />} />
          <Route path="/brace" element={<BracePage />} />
          <Route path="/phil" element={<PhilPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
