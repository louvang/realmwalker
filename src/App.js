import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">
      <header>I'm the header</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <footer>I'm the footer.</footer>
    </div>
  );
}
