import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { PreferencesProvider, usePreferences } from "./context/PreferencesContext";
import AppRoutes from "./routes/AppRoutes"; 
import Footer from "./components/layout/Footer";
import { MoviePlayerProvider, useMoviePlayer } from "./context/MoviePlayerContext";



const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { bgColor = "bg-black", textColor = "text-white", isLoaded } = usePreferences();
  const { isPlaying } = useMoviePlayer(); 

  const hideNavbar = isPlaying || ["/sign-in", "/sign-up", "/faq", "/contact", "/terms-and-condition", "/about"].includes(location.pathname) || location.pathname.startsWith("/profile");
  
  const dynamicRoutes = [
    "/sign-in",
    "/sign-up",
    "/faq",
    "/contact",
    "/terms-and-condition",
    "/about"
  ];

  const excludeStyles = ["/sign-in", "/sign-up"].includes(location.pathname);

  const hideFooter = dynamicRoutes.includes(location.pathname) ||
                   /^\/genre\/[^\/]+$/.test(location.pathname) ||
                   /^\/movies\/[^\/]+\/?$/.test(location.pathname);


  if (!isLoaded) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={`min-h-screen pt-1 ${excludeStyles ? "" : "transition-all duration-500"} ${excludeStyles ? "" : `${textColor} ${bgColor}`}`}>
        {children}
        {!hideFooter && <Footer />}
      </main>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <PreferencesProvider>
          <MoviePlayerProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </MoviePlayerProvider>
        </PreferencesProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
