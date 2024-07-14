import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

export default function MoviesDetailsPage({ movie }) {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <MovieCast movieId={movie.id} />
            <MovieReviews movieId={movie.id} />
        </div>
    );
}
