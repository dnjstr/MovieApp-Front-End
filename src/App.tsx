import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";
import MovieListSection from "./components/movies/Movielistsection";
import MovieDetail from "./components/movies/MovieDetail";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Popular from "./components/pages/Popular";
import Genre from "./components/pages/Genre";
import MyList from "./components/pages/MyList";
import ProfilePage from "./components/pages/ProfilePage";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { PreferencesProvider, usePreferences } from "./context/PreferencesContext"; 
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import FAQ from "./components/pages/faq";
import TermsAndCondition from "./components/pages/TermsandCondition";
import Preferences from "./components/pages/Preferences";
import GenreMovies from "./components/pages/GenreMovies";

// Layout Component (Uses Global Background Color
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { bgColor } = usePreferences();
  const hideNavbar = ["/sign-in", "/sign-up", "/settings", "/profile"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={`${bgColor} text-white min-h-screen px-6 pt-1 transition-all duration-500`}>
        {children}
      </main>
    </>
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; 

  return user ? children : <Navigate to="/sign-in" replace />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <PreferencesProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<><MainPage /><MovieListSection /></>} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/genre/" element={<Genre />} />
              <Route path="/genre/:genreName" element={<GenreMovies />} />
              <Route path="/my-list" element={<MyList />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/about" element={<About />} />
              <Route path="/terms-and-condition" element={<TermsAndCondition />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/settings" element={<Preferences />} />
            </Routes>
          </Layout>
        </Router>
      </PreferencesProvider>
    </AuthProvider>
  );
};

export default App;
