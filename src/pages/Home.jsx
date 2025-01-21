import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";



function Home() {


  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // delay for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="main-wrapper">

      <Sidebar />

      <main className="main-content">

        <div>
          {showLoader ? (
            <Loader />
          ) : (
            <div>
              {/* header starts */}
              <div className="app-header" style={{ backgroundImage: 'url(./home.webp)' }}>
                <Navbar />

                <div className="text-center px-4 d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>

                  <div className="mx-auto" style={{ maxWidth: '700px' }}>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
                      <span className="text-red-700 ">MovieFlix, </span>
                      Your Favourite Movie Finder
                    </h1>

                  </div>
                </div>
              </div>
              {/* header ends */}

              <Footer />
            </div>
          )}
        </div>



      </main>

    </div>
  );
}

export default Home;
