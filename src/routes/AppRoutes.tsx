import { Routes, Route } from "react-router-dom";
import MainPage from "../components/layout/MainPage";
import MovieListSection from "../components/movies/Movielistsection";
import MovieDetail from "../components/movies/MovieDetail";
import SignIn from "../components/auth/reusable/SignIn";
import SignUp from "../components/auth/reusable/SignUp";
import ComingSoon from "../components/pages/comingsoon/ComingSoon";
import Genre from "../components/pages/genres/Genre";
import MyList from "../components/pages/my-list/MyList";
import About from "../components/footerlinks/about";
import Contact from "../components/footerlinks/contact";
import FAQ from "../components/footerlinks/faq";
import TermsAndCondition from "../components/footerlinks/TermsandCondition";
import GenreMovies from "../components/pages/genres/GenreMovies";

const AppRoutes = () => {
    return (
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
    );
};
export default AppRoutes;
