import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "e2d564235e7c413b5bb320425416e633";

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}&language=en-US`);
    return response.data.results;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};
