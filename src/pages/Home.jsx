import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import { getTrendingMovies } from "../services/api";
import UseFetch from "../hooks/UseFetch";

import MovieList from "../components/MovieList";

function Home() {

  const { data, loading, error } = UseFetch(getTrendingMovies);

  const [randomImage, setRandomImage] = useState("");

  // Function to get a random image URL from the data.results array
  const getRandomImage = (movies) => {
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const imagePath = movies[randomIndex].backdrop_path;
      return `https://image.tmdb.org/t/p/w1280/${imagePath}`;
    }
    return "";
  };

  // Set the random image when data is loaded
  useEffect(() => {
    if (data && data.results) {
      setRandomImage(getRandomImage(data.results));
    }
  }, [data]);

  return (
    <div className="main-wrapper">
      <Sidebar />
      <main className="main-content">
        <div>
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="flex justify-center items-center h-screen">
              <div className="alert alert-danger text-center" role="alert">
                <h2 className="alert-heading">Error fetching movies: {error}</h2>
              </div>
            </div>
          ) : (
            <div>
              {/* header starts */}
              <div className="bg-dark">
                <div className="app-header" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.13) 20%, rgba(0, 0, 0, 0.66)), url(${randomImage}) top center / cover no-repeat` }}>
                  <Navbar />
                  
                  <div className="text-center px-4 flex justify-center items-center min-h-[500px]">
                    <div className="mx-auto max-w-[700px]">
                      <h1 className="">
                        <span className="text-red-600 bg-black">MovieFlix,</span> Your Favourite Movie Finder
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* header ends */}

              {/* movie list starts */}
              <div className="md:px-5 px-2">
                <div className="pt-8 pb-4">
                  {/* <h1 className="d-inline-block mb-5 px-3 py-2 text-dark text-xl border-l-4 border-l-black"></h1> */}

                  <div className="flex items-center gap-4 mb-8">
                    <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 border-l-4 border-pink-500 pl-4 tracking-tight drop-shadow-md'>
                      <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Popular Movies
                      </span>
                    </h2>
                    <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
                  </div>


                  <div>
                    <MovieList items={data.results} type="movie" arrangement="stacked" /> {/* Pass the type prop */}
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
