import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Counter from "./components/counter";
import LikeDislike from "./components/LikeDislike";

function App() {
  return (
    <BrowserRouter>
      <h1>My React App</h1>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>{" | "}
        <Link to="/skills">Skills</Link>{" | "}
        <Link to="/contact">Contact</Link>{" | "}
        <Link to="/counter">Counter</Link>{" | "}
        <Link to="/like">Like / Dislike</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/like" element={<LikeDislike />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;