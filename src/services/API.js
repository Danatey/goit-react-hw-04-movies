import axios from "axios";
import { API_KEY } from "./API_KEY";

const BASE_URL = "https://api.themoviedb.org";

const getTrending = () => {
  const url = `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`;
  return axios.get(url);
};

const getSearchMovies = (query) => {
  const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  return axios.get(url);
};

const getMovieDetails = (id) => {
  const url = `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  return axios.get(url);
};

const getMovieCredits = (id) => {
  const url = `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  return axios.get(url);
};

const getMovieReviews = (id) => {
  const url = `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  return axios.get(url);
};

export {
  getTrending,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
