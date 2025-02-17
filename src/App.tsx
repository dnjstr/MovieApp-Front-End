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
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import FAQ from "./components/pages/faq";
import TermsAndCondition from "./components/pages/TermsandCondition";

// Layout Component
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideNavbar = ["/sign-in", "/sign-up", "/settings", "/ProfilePage"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="bg-black text-white min-h-screen p-6">{children}</main>
    </>
  );
};

// Protected Route Wrapper
// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/sign-in" replace />;
// };

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
            {/* <Route path="/profilepage" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/TermsandCondition" element={<TermsAndCondition />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path= "/ProfilePage" element={<ProfilePage/>} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
