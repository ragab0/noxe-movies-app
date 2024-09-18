import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/Home";
import MoviesPage from "./pages/Movies/Movies";
import PeoplePage from "./pages/People/People";
import NotFound from "./components/NotFound/NotFound";
import TvPage from "./pages/Tv/Tv";
import AboutPage from "./pages/About/About";
import NetworksPage from "./pages/Networks/Networks";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import Details from "./pages/Details/Details";
import Pagination from "./pages/pagination";

function App() {
  return (
    <div className="app">
      {/* <Pagination />; */}
      <Navbar />
      <div className="app-wrapper">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="tv" element={<TvPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="networks" element={<NetworksPage />} />
          <Route path="details">
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
