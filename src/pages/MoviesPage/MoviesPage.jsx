import { useState } from "react";
import { searchMovies } from "../../movies-api.js";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useNavigate } from "react-router-dom";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const data = await searchMovies(query);
            setMovies(data);
            navigate('/movies', { state: { movies: data, query } });
        } catch (error) {
            console.log("Error!");
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch} className={css.form}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for movies"
                />
                <button type="submit" className={css.btn}>Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}
