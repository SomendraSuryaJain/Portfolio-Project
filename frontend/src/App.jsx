import React from "react";
import Router from "./router/Router";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
