import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="background">
        <div className="flex justify-between mx-3  ">
          <div className="flex mt-4 ml-3">
          <img src="../movie.jpg"  className='logo' />
            <a href="blah">
              <h2 className="text-3xl text-white mt-4 ml-5">MovieFlix</h2>
            </a>
          </div>
          <div className="mt-4 ">
          <select className="bg-gray-800 text-white p-3 rounded">
            <option>Movie</option>
            <option>Series</option>
          </select>
            <input type="text"
             placeholder="search Movies" 
             className="p-3 w-64 md:w-80 bg-white-800 text-black placeholder-white-400"
             />
             <button className="p-3 bg-gray-800 rounded">🔍</button>
          </div>
        </div>
        {/* end of header */}
        <div className="text-center px-4 ">
          <h1 className="text-6xl text-white font-bold mt-28 ">
            <span className="text-red-700 ">MovieFlix,</span>
            Your Favourite Movie Finder
          </h1>
        </div>
      </div>
      {/* end of section */}
    </div>
  );
}

export default Home;
