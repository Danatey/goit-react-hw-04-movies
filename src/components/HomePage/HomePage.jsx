import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrending } from '../../services/API';

import './HomePage.scss'

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then((response) => {
      const fetchedMovies = response.data.results.map((movie) => {
        return {
          movieId: movie.id,
          movieName: movie.title ?? movie.name,
        };
      });

      setMovies((prevState) => [...prevState, ...fetchedMovies]);
    })
  },[])

  return <div>
    <h1>Trending today</h1>
    <ul>
      {movies.map(({movieId, movieName}) => (
        <li key={movieId}>
          <Link
            to={{
                pathname: `/movies/${movieId}`,
                state: {from: location},
            }}>
            {movieName}
          </Link>
        </li>
    ))}
    </ul>
  </div>
}

export default HomePage