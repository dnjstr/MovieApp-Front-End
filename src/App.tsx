import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";
import MovieListSection from "./components/movies/Movielistsection";
import MovieDetail from "./components/movies/MovieDetail";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Popular from "./components/pages/Popular";
import Genre from "./components/pages/Genre";
import MyList from "./components/pages/MyList";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./components/pages/ProfilePage";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="bg-black text-white min-h-screen p-6">{children}</div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<><MainPage /><MovieListSection /></>} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
