import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/AboutMe' element = {<AboutMe/>} />
      </Routes>
    </Router>
  );
};

export default App;
