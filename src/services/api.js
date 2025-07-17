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

export const getAnime = (page = 1) =>
  fetchMovies("/discover/tv?with_keywords=210024&sort_by=popularity.desc&with_genres=16", { page });


export const getDetails = (id, type) =>
  fetchMovies(`/${type}/${id}`);

export const getRecommendations = (id, type) =>
  fetchMovies(`/${type}/${id}/recommendations`);

export const getSearchedMovie = (query, type) => {
  const endpoint = type === 'movie' ? '/search/movie?include_adult=true' : '/search/tv?include_adult=true';
  return fetchMovies( endpoint, /* `&include_adult=true` */ { query });
}

export const getVideo = (id, type) => {
  return fetchMovies(`/${type}/${id}/videos`);
}

export const getCredit = (id, type) => {
  return fetchMovies(`/${type}/${id}/credits`);
}