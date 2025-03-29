// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";
// import Loader from "../components/Loader";

// import { getInTheatresMovies } from "../services/api";
// import UseFetch from "../hooks/UseFetch";

// import MovieList from "../components/MovieList";

// function Theatres() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const page = parseInt(id, 10) || 1;

//   const { data, loading, error } = UseFetch(getInTheatresMovies, page);
//   const [randomImage, setRandomImage] = useState("");

//   // Function to get a random image URL from the data.results array
//   const getRandomImage = (movies) => {
//     if (movies && movies.length > 0) {
//       const randomIndex = Math.floor(Math.random() * movies.length);
//       const imagePath = movies[randomIndex].backdrop_path;
//       return `https://image.tmdb.org/t/p/w1280/${imagePath}`;
//     }
//     return "";
//   };

//   // Set the random image when data is loaded
//   useEffect(() => {
//     if (data && data.results) {
//       setRandomImage(getRandomImage(data.results));
//     }
//   }, [data]);

//   // Handle navigation to the next/previous page
//   const goToPage = (pageNumber) => {
//     navigate(`/in-theatres/${pageNumber}`);
//   };

//   return (
//     <div className="main-wrapper">
//       <Sidebar />
//       <main className="main-content">
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//             <div className="alert alert-danger text-center" role="alert">
//               <h2 className="alert-heading">Error fetching movies: {error}</h2>
//             </div>
//           </div>
//         ) : (
//           <div>
//             {/* header starts */}
//             <div className="bg-dark">
//               <div className="app-header" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.13) 20%, rgba(0, 0, 0, 0.66)), url(${randomImage}) top center / cover no-repeat` }}>
//                 <Navbar />
//                 <div className="text-center px-4 d-flex justify-content-center align-items-center" style={{ minHeight: '500px' }}>
//                     <div className="mx-auto" style={{ maxWidth: '700px' }}>
//                       <h1 className="">
//                         <span className="text-success ">MovieFlix, </span>
//                         Your Favourite Movie Finder
//                       </h1>
//                     </div>
//                   </div>
//               </div>
//             </div>
//             {/* header ends */}

//             <div className="container-fluid">
//               <div className="pt-5 pb-4">
//               <h1 className="d-inline-block mb-5 px-3 py-2 text-dark" style={{ fontSize: '28px', backgroundColor: 'rgb(230, 253, 255)' }}>In Theatres</h1>
//                 <div>
//                   <MovieList items={data.results} type="movie" /> {/* Pass the type prop */}
//                 </div>
//                 {/* pagination */}
//                 <div className="mt-3 text-center">
//                   <button onClick={() => { if (page > 1) { goToPage(page - 1) } }} className={`btn btn-primary btn-lg mr-3 ${page < 2 ? 'disabled' : ''}`}>
//                     <i className="fa fa-long-arrow-left"></i> Previous
//                   </button>
//                   <span className="font-weight-bold"> {page} </span>
//                   <button onClick={() => goToPage(page + 1)} className="btn btn-primary btn-lg ml-3">
//                     Next <i className="fa fa-long-arrow-right"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <Footer />
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default Theatres;

import { useState, useEffect, useRef } from "react";

function Theatres() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    // Focus the input on component mount
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const searchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setResults(data.results || []);
        setHasSearched(true);
      } catch (err) {
        setError(err.message);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      searchMovies();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="movie-search-container">
      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          aria-label="Movie search"
        />
        {isLoading && <span className="spinner">⌛</span>}
      </div>

      <div className="search-resuls">
        {error && <div className="error-message">{error}</div>}

        {!error && hasSearched && results.length === 0 && (
          <div className="no-results">No movies found</div>
        )}

        {results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-poster">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`Poster for ${movie.title}`}
                  loading="lazy"
                />
              ) : (
                <div className="poster-placeholder">No Image</div>
              )}
            </div>
            <div className="movie-info">
              <h3>
                {movie.title} ({movie.release_date?.substring(0, 4)})
              </h3>
              <p className="movie-overview">
                {movie.overview || "No overview available."}
              </p>
              <div className="movie-rating">
                Rating: {movie.vote_average}/10
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theatres;
