import {useState, useEffect} from 'react'

import { getTrending } from '../../services/API'

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then((response) => {
      const fetchedMovies = response.data.results.map((movie) => {
        return {
          id: movie.id,
          name: movie.title ?? movie.name,
        };
      });

      setMovies((prevState) => [...prevState, ...fetchedMovies]);
    })
  },[])

  return <div>
    <h1>Trending today</h1>
    <ul>
      {movies.map(({id, name}) => (
        <li key={id}>
          <a href="/">{name}</a>
      </li>
    ))}
    </ul>
  </div>
}

export default HomePage