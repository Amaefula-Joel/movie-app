import React from 'react'

import Navbar from "../components/Navbar";

function Theatres() {
  return (
    <div className='container'>
      <div className='trending'>
        <Navbar />
        
        <div className="text-center px-4 ">
          <h1 className="text-6xl text-white font-bold mt-28 ">
            <span className="text-red-700 ">MovieFlix,</span>
            Your Favourite  Movie Finder
          </h1>
        </div>
      </div>
      {/* end of section */}
    </div>
  )
}

export default Theatres