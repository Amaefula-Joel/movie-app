import './App.css';
// import './styles/custom.css'; // Importing Bootstrap custom CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importing Bootstrap JS
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import TrendingToday from './pages/TrendingToday';
import TopRated from './pages/TopRated';
import Theatres from './pages/Theatres';
import Bookmarks from './pages/Bookmarks';
import TvSeries from './pages/TvSeries';
import Details from './pages/Details'; // Import the Details component

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <div className='dark:bg-black bg-gray-100'>
        <BrowserRouter>
          <ThemeProvider>

            <Routes>
              {/* Landing page */}
              <Route path="/" element={<LandingPage />} />

              {/* application routes */}
              <Route path="/home" element={<Home />} />
              <Route path="/trending/:id" element={<TrendingToday />} />
              <Route path="/top-rated/:id" element={<TopRated />} />
              <Route path="/in-theatres/:id" element={<Theatres />} />
              <Route path="/tv-series/:id" element={<TvSeries />} />
              <Route path="/bookmarks/:id" element={<Bookmarks />} />
              
              {/* New routes for details */}
              <Route path="/details/:type/:id" element={<Details />} />
              {/* <Route path="/details/:tv/:id" element={<Details />} /> */}
            </Routes>

          </ThemeProvider>
        </BrowserRouter>

      </div>
    </MantineProvider>
  );
}

export default App;
