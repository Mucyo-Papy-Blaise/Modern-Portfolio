import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import ShowCase from "./pages/ShowCase";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Education from "./Admin/Education";
import Experience from "./Admin/Experience";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ShowCase" element={<ShowCase />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element= {<Experience />} />
      </Routes>
    </Router>
  );
};

export default App;
