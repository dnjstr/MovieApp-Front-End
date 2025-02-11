import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import MovieListSection from "./components/Movielistsection";
import MovieDetail from "./components/MovieDetail";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <Routes>
          <Route path="/" element={<><MainPage /><MovieListSection /></>} />
          <Route path="/popular" element={<div>New & Popular Page</div>} />
          <Route path="/genre" element={<div>Genre Page</div>} />
          <Route path="/my-list" element={<div>My List Page</div>} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
