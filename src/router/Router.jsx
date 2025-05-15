import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import AboutPage from "../pages/aboutpage/AboutPage";
import ServicesPage from "../pages/servicepage/ServicesPage";
import PortfolioPage from "../pages/portfoliopage/PortfolioPage";
import ContactPage from "../pages/contactpage/ContactPage";
import SkillsPage from "../pages/skillspage/SkillsPage";
import TestingSkills from "../pages/testingskills/TestingSkills";
import DatabaseSkills from "../pages/database_skill/DatabaseSkills";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<ServicesPage />} />
      <Route path="/projects" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/skillspage" element={<SkillsPage />} />
      <Route path="/testingskills" element={<TestingSkills />} />
      <Route path="/databaseSkills" element={<DatabaseSkills />} />
    </Routes>
  );
};

export default Router;
