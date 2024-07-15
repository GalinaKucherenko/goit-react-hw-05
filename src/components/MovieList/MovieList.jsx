import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
    const location = useLocation();
    
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h2></h2>
                    <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    );
}
