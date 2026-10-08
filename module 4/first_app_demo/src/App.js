import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Counter from "./components/counter";
import LikeDislike from "./components/LikeDislike";

function App() {
  return (
    <BrowserRouter>
      <h1>React App</h1>

      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/counter">Counter</Link>{" | "}
        <Link to="/like">Like / Dislike</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        <Route path="/counter" element={<Counter />} />

        <Route path="/like" element={<LikeDislike />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;