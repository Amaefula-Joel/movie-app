import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function TvSeries() {
  return (
    <div className="main-wrapper">

      <Sidebar />

      <main className="main-content">

        {/* header starts */}
        <div className="app-header" style={{ backgroundImage: 'url(./series.webp)' }}>
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
      </main>

    </div>
  );
}

export default TvSeries;
