import React from "react";
// import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import Loader from "../components/Loader";
import CustomHeading from "../components/CustomHeading";
import HeroCarousel from "../components/HeroCarousel";
import MoviesListCarousel from '../components/MoviesListCarousel'

import { getTrendingMovies, getPopularMovies , getInTheatresMovies, getTopRatedMovies, getAnime } from "../services/api";
import UseFetch from "../hooks/UseFetch";

function Home() {
  const { data: trendingData, loading: trendingLoading, error: trendingError } = UseFetch(getTrendingMovies);
  const { data: popularData, loading: popularLoading, error: popularError } = UseFetch(getPopularMovies);
  const { data: animeData, loading: animeLoading, error: animeError } = UseFetch(getAnime);
  const { data: theatresData, loading: theatresLoading, error: theatresError } = UseFetch(getInTheatresMovies);
  const { data: topRatedData, loading: topRatedLoading, error: topRatedError } = UseFetch(getTopRatedMovies);


  return (
    <div className="main-wrapper">
      <Sidebar />
      <main className="main-content">
        <div>
          {(trendingLoading || theatresLoading || topRatedLoading || animeLoading || popularLoading) ? (
            <Loader />
          ) : (trendingError || theatresError || topRatedError || animeError || popularError) ? (
            <div className="flex justify-center items-center h-screen">
              <div className="alert alert-danger text-center" role="alert">
                <h2 className="alert-heading">Error fetching movies</h2>
              </div>
            </div>
          ) : (
            <div>
              {/* header starts */}
              <div className="bg-dark">
                <div className="app-header">
                  <Navbar />

                  <div>
                    {/* carousel */}
                    <HeroCarousel movies={trendingData.results} />
                  </div>

                </div>
              </div>
              {/* header ends */}

              {/* movie list starts */}
              {/* <div className="md:px-5 px-2">
                <div className="pt-8 pb-4">
                  <div>
                    <MovieList items={trendingData.results} type="movie" arrangement="stacked" />
                  </div>
                </div>
              </div> */}

              <div className="md:px-7 px-4">

                {/* Popular Movies Carousel */}
                <section className="mt-6 mb-10">
                  <CustomHeading title="Popular Movies" />

                  <MoviesListCarousel type="movie" movies={popularData?.results || []} />
                </section>

                {/* Anime Carousel */}
                <section className="mt-6 mb-10">
                  <CustomHeading title="Anime Series" />

                  <MoviesListCarousel type="tv" movies={animeData?.results || []} />
                </section>

                {/* In Theatres Carousel */}
                <section className="mb-10">
                  <CustomHeading title="In Theatres" />

                  <MoviesListCarousel type="movie" movies={theatresData?.results || []} />
                </section>

                {/* Top Rated Carousel */}
                <section className="mb-10">
                  <CustomHeading title="Top Rated Movies" />
                  
                  <MoviesListCarousel type="movie" movies={topRatedData?.results || []} />
                </section>

                {/* Footer */}
                <Footer />

              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;
