import { Routes, Route } from "react-router-dom";
import MainPage from "../components/layout/MainPage";
import MovieListSection from "../components/movies/Movielistsection";
import MovieDetail from "../components/movies/MovieDetail";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import ComingSoon from "../components/pages/ComingSoon";
import Genre from "../components/pages/Genre";
import MyList from "../components/pages/MyList";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import FAQ from "../components/pages/faq";
import TermsAndCondition from "../components/pages/TermsandCondition";
import GenreMovies from "../components/pages/GenreMovies";

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
