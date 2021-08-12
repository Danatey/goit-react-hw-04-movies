import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import {getMovieReviews} from '../services/API'

const Reviews = () => {
    const [review, setReview] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        getMovieReviews(movieId).then(response =>
            setReview(response.data.results)
            
        );
    }, [movieId]);

    return <ul>
        {review.length>0 ? (
            review.map(({ author, content }) => (
            <li key={author}>
                <h3>{author}</h3>
                <p>{content}</p>
            </li>
            ) 
        )) : (<li><p>We don't have any reviews for this movie.</p></li>)}
    </ul>
}

export default Reviews;