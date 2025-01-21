import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import axios from "axios";

function TheatreAPI() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/3WnoZw50qIfXsFnKr0LddEh5Jnf.jpg'
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; // Base URL for poster images
  const fetchMovies = async () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTI4YTdiNzVmN2YwMDgxZjAxZDBlNGRmMWU4YmI0OSIsIm5iZiI6MTczNzM2MzY2My41MzUsInN1YiI6IjY3OGUxMGNmZTQ1NjYzOTlhMjZlMWZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NOc07JhI7iQnUdn5KGF2hpbBFYJJlPUIe1RIO6zOC4"; // Use your actual token here
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Bearer token for authentication
          },
          params: {
            language: "en-US",
            page: 1,
          },
        }
      );

      // Log the entire response data to the console
      console.log("Full API response:", response.data); // Full response data
      console.log("Movie results:", response.data.results); // Only the movie results array

      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching the movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <h1>Top Rated</h1> */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "70px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px", textAlign: "center" }}>
            {movie.poster_path ? (
              <img
                src={`${imageBaseUrl}${movie.poster_path}`}
                alt={movie.title}
                className="hover-500 cursor-pointer"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            ) : (
              <div>No poster available</div>
            )}
            {/* <h3>{movie.title}</h3> */}
            <div className="flex gap-4 mt-5 justify-between">
                <div className="flex">
                    <FaStar size={16} 
                    className="mt-0.5 mr-1 text-gray-300 hover:text-red-800 cursor-pointer transition-all " />
                    <p>{movie.vote_average}</p>
                </div>
                <div className="bookmark icon"> 
                <FaBookmark size={16} 
                className="text-gray-400 hover:text-red-800 cursor-pointer transition-all rounded-full" />
                </div>
            </div>
            <div className="flex mt-3 align-center ml-1">
                <FaCalendar size={16} className="mt-1 mr-1 text-red-800" />
                <p>{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheatreAPI;
