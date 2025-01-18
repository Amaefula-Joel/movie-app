import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="background">
        <div className="flex justify-between mx-3">
          <div className="title">
            <a href="blah">
              <h2>MovieFlix</h2>
            </a>
          </div>
          <div className="search">
            <input type="text" placeholder="search Movies" />
          </div>
        </div>
        {/* end of header */}
        <div className="items-center justify-center">
          <h1 className="text-[50px] font-bold ">
            <span className="text-blue-500 ">MovieFlix,</span>
            Your Favourite Movie Finder
          </h1>
        </div>
      </div>
      {/* end of section */}
    </div>
  );
}

export default Home;
