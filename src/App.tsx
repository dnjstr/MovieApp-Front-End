import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MovieListSection from "./components/Movielistsection";
import MovieDetail from "./components/MovieDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <Routes>
          <Route path="/" element={<><HeroSection /><MovieListSection /></>} />
          <Route path="/popular" element={<div>New & Popular Page</div>} />
          <Route path="/genre" element={<div>Genre Page</div>} />
          <Route path="/my-list" element={<div>My List Page</div>} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
