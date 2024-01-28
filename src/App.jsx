import "./index.css";
import React, { useState } from "react";
import { Home } from "./pages/home/Home";
import { NavBar } from "./components";
import Projects from "./pages/projects/Projects";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
