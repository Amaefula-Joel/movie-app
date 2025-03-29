import axios from "axios";

// Read the API key from the environment variable
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchMovies = (endpoint, params = {}) =>
  apiClient
    .get(endpoint, { params: { language: "en-US", ...params } })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching movies:", error);
      throw error; // Rethrow the error for further handling
    });

// Example endpoints
export const getPopularMovies = (page = 1) =>
  fetchMovies("/movie/popular", { page });

export const getTrendingMovies = () =>
  fetchMovies("/trending/movie/week");

export const getTopRatedMovies = (page = 1) =>
  fetchMovies("/movie/top_rated", { page });

export const getInTheatresMovies = (page = 1) =>
  fetchMovies("/movie/now_playing", { page });

export const getTvSeries = (page = 1) =>
  fetchMovies("/tv/popular", { page });

export const getMovieDetails = (id) =>
  fetchMovies(`/movie/${id}`);

export const getTvSeriesDetails = (id) =>
  fetchMovies(`/tv/${id}`);

export const getSimilarMovies = (id) =>
  fetchMovies(`/movie/${id}/similar`);

export const getSimilarTvSeries = (id) =>
  fetchMovies(`/tv/${id}/similar`);

export const getSearchedMovie = (query, type) => {
  const endpoint = type === 'movie' ? '/search/movie' : '/search/tv';
  return fetchMovies( endpoint, /* `&include_adult=true` */ { query });
}

// https://api.themoviedb.org/3/tv/{series_id}/similar
// https://api.themoviedb.org/3/movie/{movie_id}/similar
