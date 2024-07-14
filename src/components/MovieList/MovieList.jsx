import MoviesDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";

export default function MovieList({ movies }) {
    return (
        <ul>
            {movies.map((movie) => {
                <li key={movie.id}>
                    <MoviesDetailsPage movie={movie} />
                </li>
            })}
        </ul>
    );
}