import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
