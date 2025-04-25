import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import AboutPage from "../pages/aboutpage/AboutPage";
import ServicesPage from "../pages/servicepage/ServicesPage";
import PortfolioPage from "../pages/portfoliopage/PortfolioPage";
import ContactPage from "../pages/contactpage/ContactPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<ServicesPage />} />
      <Route path="/projects" element={<PortfolioPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Router;
