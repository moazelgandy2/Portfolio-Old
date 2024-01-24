import "./index.css";
import React, { useState } from "react";
import { Home } from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container mx-auto px-2 xs:min-w-[95%] xs:text-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
