import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MovieListSection from "./components/Movielistsection";
import MovieDetail from "./components/MovieDetail";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <div className="pt-16 p-6">
          <Routes>
            <Route path="/" element={<><HeroSection /><MovieListSection /></>} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
