import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.log("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, [movieId]);

    return (
        <div>
            <ul>
                {reviews.map(review => (
                    <li key={review.id} className={css.list}>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}