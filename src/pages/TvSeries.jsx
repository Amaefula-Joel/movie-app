import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import { getTvSeries } from "../services/api"; // Ensure this API function exists
import UseFetch from "../hooks/UseFetch";
import MovieList from "../components/MovieList";

function TvSeries() {
  const { id } = useParams();
  const navigate = useNavigate();
  const page = parseInt(id, 10) || 1;

  const { data, loading, error } = UseFetch(getTvSeries, page);
  const [randomImage, setRandomImage] = useState("");

  const getRandomImage = (series) => {
    if (series && series.length > 0) {
      const randomIndex = Math.floor(Math.random() * series.length);
      const imagePath = series[randomIndex].backdrop_path;
      return `https://image.tmdb.org/t/p/w1280/${imagePath}`;
    }
    return "";
  };

  useEffect(() => {
    if (data && data.results) {
      setRandomImage(getRandomImage(data.results));
    }
  }, [data]);

  const goToPage = (pageNumber) => {
    navigate(`/tv-series/${pageNumber}`);
  };

  return (
    <div className="main-wrapper">
      <Sidebar />
      <main className="main-content">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="alert alert-danger text-center" role="alert">
              <h2 className="alert-heading">Error fetching TV series: {error}</h2>
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
                      <h1 className="">
                        <span className="text-warning ">MovieFlix, </span>
                        Your Favourite Movie Finder
                      </h1>
                    </div>
                  </div>
              </div>
            </div>
            {/* header ends */}
            <div className="container-fluid">
              <div className="pt-5 pb-4">
              <h1 className="d-inline-block mb-5 px-3 py-2 text-dark" style={{ fontSize: '28px', backgroundColor: 'rgb(230, 253, 255)' }}>Popular TV Series</h1>
                <div>
                  <MovieList items={data.results} type="tv" /> {/* Pass the type prop */}
                </div>
                <div className="mt-3 text-center">
                  <button onClick={() => { if (page > 1) { goToPage(page - 1) } }} className={`btn btn-primary btn-lg mr-3 ${page < 2 ? 'disabled' : ''}`}>
                    <i className="fa fa-long-arrow-left"></i> Previous
                  </button>
                  <span className="font-weight-bold"> {page} </span>
                  <button onClick={() => goToPage(page + 1)} className="btn btn-primary btn-lg ml-3">
                    Next <i className="fa fa-long-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </main>
    </div>
  );
}

export default TvSeries;
