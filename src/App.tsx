import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";
import MovieListSection from "./components/movies/Movielistsection";
import MovieDetail from "./components/movies/MovieDetail";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Popular from "./components/pages/Popular";
import Genre from "./components/pages/Genre";
import MyList from "./components/pages/MyList";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <Routes>
          <Route path="/" element={<><MainPage /><MovieListSection /></>} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
