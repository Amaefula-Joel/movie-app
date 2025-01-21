// import logo from './logo.svg';
import './App.css';
import './styles/custom.css'; // Importing Bootstrap custom CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importing Bootstrap JS
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import TrendingToday from './pages/TrendingToday';
import TopRated from './pages/TopRated';
import Theatres from './pages/Theatres';
import Bookmarks from './pages/Bookmarks';
import TvSeries from './pages/TvSeries';
// import Sidebar from './components/Sidebar';
// import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/test" element={<Layout />} /> */}

        {/* application routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<TrendingToday />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/in-theatres" element={<Theatres />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;