import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './pages/LandingPage';
import AboutMe from './pages/AboutMe';
import ShowCase from './pages/ShowCase';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/AboutMe' element = {<AboutMe/>} />
      <Route path='/ShowCase' element = {<ShowCase/>} />
      </Routes>
    </Router>
  );
};

export default App;
