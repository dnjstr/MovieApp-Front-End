import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MoviesListSection from "./components/Movielistsection";

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-center">JustWatch</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Navbar />
        <HeroSection />
        <MoviesListSection />
      </main>
    </div>
  );
};

export default App;
