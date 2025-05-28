import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import ShowCase from "./pages/ShowCase";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Education from "./Admin/Pages/Education";
import Experience from "./Admin/Pages/Experience";
import ExperienceNew from "./Admin/Pages/ExperienceNew";
import Dashboard from "./Admin/Pages/Dashboard";
import EducationNew from "./Admin/Pages/EducationNew";
import Projects from "./Admin/Pages/Projects";
import ProjectNew from "./Admin/Pages/ProjectNew";
import Blogs from "./Admin/Pages/Blogs";
import BlogNew from "./Admin/Pages/BlogNew";
import Skills from "./Admin/Pages/Skills";
import SkillNew from "./Admin/Pages/SkillNew";
import Services from "./Admin/Pages/Services";
import ServiceNew from "./Admin/Pages/ServiceNew";

import NavBar from "./Component/NavBar";
import AdminLayout from "./Admin/Component/AdminLayout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<><NavBar /><LandingPage /></>} />
        <Route path="/AboutMe" element={<><NavBar /><AboutMe /></>} />
        <Route path="/ShowCase" element={<><NavBar /><ShowCase /></>} />
        <Route path="/Service" element={<><NavBar /><Service /></>} />
        <Route path="/Contact" element={<><NavBar /><Contact /></>} />
        <Route path="/Blog" element={<><NavBar /><Blog /></>} />

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="education" element={<Education />} />
          <Route path="education/new" element={<EducationNew />} />
          <Route path="experience" element={<Experience />} />
          <Route path="experience/new" element = {<ExperienceNew />} />
          <Route path="projects" element ={<Projects />} />
          <Route path="projects/new" element ={<ProjectNew />} />
          <Route path="blogs" element ={<Blogs />} />
          <Route path="blogs/new" element ={<BlogNew />} />
          <Route path="skills" element ={<Skills />} />
          <Route path="skills/new" element ={<SkillNew />} />
          <Route path="services" element ={<Services />} />
          <Route path="service/new" element={<ServiceNew />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
