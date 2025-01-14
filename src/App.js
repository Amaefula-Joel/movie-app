// import logo from './logo.svg';
import './App.css';
import './styles/custom.css'; // Importing Bootstrap custom CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importing Bootstrap JS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import TrendingToday from './pages/TrendingToday';
import TopRated from './pages/TopRated';
import Theatres from './pages/Theatres';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* routes with sidebar */}
        <Route path="/app" 
        element={
          <div style={{display:'flex'}}>
            <Sidebar/>
            <div style={{marginLeft:'250px',padding:'20px',flex:1}}>
              <Routes>
              <Route path="/about" element={<Home />} />
              <Route path="/about" element={<TrendingToday />} />
              <Route path="/services" element={<TopRated />} />
              <Route path="/contact" element={<Theatres />} />
              </Routes>
            </div>
          </div>
        } /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
