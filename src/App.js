// import logo from './logo.svg';
import './App.css';
import './styles/custom.css'; // Importing Bootstrap custom CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importing Bootstrap JS
import 'font-awesome/css/font-awesome.min.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
