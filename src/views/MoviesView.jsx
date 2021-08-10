import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import MoviesPage from "../components/MoviesPage";
import {getSearchMovies} from '../services/API'

const MoviesPageView = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search === "") {
            return;
        }
        getSearchMovies(search)
            .then((response) => {
            const fetchedMovies = response.data.results.map((movie) => {
                return {
                    movieId: movie.id,
                    movieName: movie.title ?? movie.name,
                };
            });

            setMovies((prevState) => [...prevState, ...fetchedMovies]);
        })
    }, [search]);

    const onSearchHandle = (query) => {
        setSearch(query);
        setMovies([]);
    };

    return (<>
        <MoviesPage onSearch={onSearchHandle} />
        {movies && (
            movies.map(({movieId, movieName}) => (
                <li key={movieId}>
                    <Link
                        to={{
                            pathname: `/movies/${movieId}`,
                            state: {from: location},
                        }}>
                        {movieName}
                    </Link>
            </li>
            ))
        )}
    </>)
}

export default MoviesPageView