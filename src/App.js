import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import TrendingToday from "./pages/TrendingToday";
import TopRated from "./pages/TopRated";
import TvSeries from "./pages/TvSeries";
import Theatres from "./pages/Theatres";
// import Trending from "./pages/Trending";
// import TopRated from "./pages/TopRated";
// import InTheatres from "./pages/InTheatres";
// import TvSeries from "./pages/TvSeries";
// import Bookmarks from "./pages/Bookmarks";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Theatres />} />
            {/* <Route path="/trending" element={<Trending />} />
            <Route path="/top-rated" element={<TopRated />} />
            <Route path="/in-theatres" element={<InTheatres />} />
            <Route path="/tv-series" element={<TvSeries />} />
            <Route path="/bookmarks" element={<Bookmarks />} /> */}
          </Routes>
    </Router>
  );
}

export default App;