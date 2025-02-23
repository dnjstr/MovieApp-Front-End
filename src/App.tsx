import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";
import MovieListSection from "./components/movies/Movielistsection";
import MovieDetail from "./components/movies/MovieDetail";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import ComingSoon from "./components/pages/ComingSoon";
import Genre from "./components/pages/Genre";
import MyList from "./components/pages/MyList";
import { AuthProvider } from "./context/AuthContext";
import { PreferencesProvider, usePreferences } from "./context/PreferencesContext";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import FAQ from "./components/pages/faq";
import TermsAndCondition from "./components/pages/TermsandCondition";
import GenreMovies from "./components/pages/GenreMovies";

// Layout Component (Uses Global Background Color)
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { bgColor = "bg-default" } = usePreferences(); // Added a default value

  // Improved hideNavbar logic to handle dynamic paths
  const hideNavbar = ["/sign-in", "/sign-up"].includes(location.pathname) || 
                     location.pathname.startsWith("/profile");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={`${bgColor} text-white min-h-screen px-6 pt-1 transition-all duration-500`}>
        {children}
      </main>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <PreferencesProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<><MainPage /><MovieListSection /></>} />
              <Route path="/comingsoon" element={<ComingSoon />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/genre/:genreName" element={<GenreMovies />} />
              <Route path="/my-list" element={<MyList />} />
              <Route path="/movies/:id" element={<MovieDetail />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms-and-condition" element={<TermsAndCondition />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Layout>
        </PreferencesProvider>
      </AuthProvider>
    </Router>
  );
};


/*ANG MO DELETE ANI NGA COMMENT KAY PALAUTOG PISOT */

export default App;
