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
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
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

                  <div className="text-center px-4 d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>

                    <div className="mx-auto" style={{ maxWidth: '700px' }}>

                      <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
                        <span className="text-red-700 ">MovieFlix, </span>
                        Your Favourite Movie Finder
                      </h1>

                    </div>
                  </div>
                </div>

              </div>
              {/* header ends */}


              {/* movie list starts */}
              <div className="container-fluid">

                <div className="pt-5 pb-4">

                  <h1 className="d-inline-block mb-5 px-3 py-2" style={{ fontSize: '28px', backgroundColor: 'rgb(230, 253, 255)' }}>Trending Movies</h1>

                  <div>
                    <MovieList items={data.results} />
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
