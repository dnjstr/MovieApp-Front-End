import "./App.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { PreferencesProvider, usePreferences } from "./context/PreferencesContext";
import AppRoutes from "./routes/AppRoutes"; 
import Footer from "./components/layout/Footer";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { bgColor = "bg-default" } = usePreferences();


  const hideNavbar = ["/sign-in", "/sign-up"].includes(location.pathname) || location.pathname.startsWith("/profile");
  
  const hideFooter = ["/sign-in", "/sign-up"].includes(location.pathname);
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={`${bgColor} text-white min-h-screen px-6 pt-1 transition-all duration-500`}>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <PreferencesProvider>
          <Layout>
            <AppRoutes /> {/* Use the new routes file */}
          </Layout>
        </PreferencesProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
