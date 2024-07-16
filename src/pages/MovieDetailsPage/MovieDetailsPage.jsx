import { Suspense, useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, Routes, Route, Outlet } from "react-router-dom";
import { getMovieById } from "../../movies-api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";

export default function MoviesDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? { pathname: "/movies" });

    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await getMovieById(movieId);
                setMovie(data);
            } catch (error) {
                console.log("Error fetching movie details:", error);
            }
        }
        fetchMovie();
    }, [movieId]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Link className={css.btn}
                to={backLinkRef.current.pathname}
                state={{ movies: backLinkRef.current.state?.movies, query: backLinkRef.current.state?.query }} 
                >Go back</Link>
            <h1>{movie.title}</h1>
            <div className={css.container}>
                <img className={css.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Release Date</h3>
                    <p>{movie.release_date}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(genre => genre.name).join(", ")}</p>
                    <h3>Rating</h3>
                    <p>{movie.vote_average}</p>
                </div>
            </div>
            <nav className={css.nav}>
                <Link className={css.link} to={`/movies/${movieId}/cast`}>Cast</Link>
                <Link className={css.link} to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </nav>
            <Routes>
                <Route path={`/movies/${movieId}/cast`} element={<MovieCast />} />
                <Route path={`/movies/${movieId}/reviews`} element={<MovieReviews /> } />
            </Routes>
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
        </div>
    );
}
