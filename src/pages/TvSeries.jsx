import React from "react";

import Navbar from "../components/Navbar";

function TvSeries() {
  return (
    <div className="container">
      <div className="series">
        <Navbar />
        
        <div className="text-center px-4 ">
          <h1 className="text-7xl text-white font-bold mt-28 ">
            <span className="text-red-700 ">MovieFlix,</span>
            Your Favourite <br /> Movie Finder
          </h1>
        </div>
      </div>
      {/* end of section */}
    </div>
  );
}

export default TvSeries;
