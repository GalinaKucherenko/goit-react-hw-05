import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "e2d564235e7c413b5bb320425416e633";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ1NjQyMzVlN2M0MTNiNWJiMzIwNDI1NDE2ZTYzMyIsIm5iZiI6MTcyMTA1MDk0MS41NTg2NDYsInN1YiI6IjY2OTEyNzM4OTEwNmUxNjdkNDhiMzliZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U045kwcky4sbIJPI_YlGA88Vo4dd8yl6f5bdb6DwfGY";

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
};