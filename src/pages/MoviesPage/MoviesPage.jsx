import { useEffect, useState } from "react";
import { getMovies } from "../../movies-api.js";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
    async function fetchMovies() {
        try {
            const data = await getMovies();
            setMovies(data);
        } catch (error) {
            console.log("Error!");
        }
    }
    fetchMovies();
    }, []);

    return (
        <div>
            <MovieList movies={ movies } />
        </div>
    );
}