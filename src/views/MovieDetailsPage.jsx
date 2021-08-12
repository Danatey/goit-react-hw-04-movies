import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Switch, Route, useParams, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import { getMovieDetails } from '../services/API';

import './MovieDetailsPage.scss'

const Cast = lazy(() => import('./Cast.jsx' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('./Reviews.jsx' /* webpackChunkName: "Reviews" */));

const MovieDetailsPage = () =>{
    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovies] = useState();

    useEffect(() => {
            getMovieDetails(movieId).then(response => {
                const myMovie = {
                    img: response.data.poster_path,
                    name: response.data.title ?? response.data.name,
                    score: response.data.vote_average,
                    overview: response.data.overview,
                    genres: response.data.genres,
                }
                return setMovies(myMovie)
            })
    },[movieId]);

    const onGoBack = () => {
        history.push(location?.state?.from);
    }
    
    return (
        <>
            {movie && (
                <>
                    <button type="button" className='go-back-button' onClick={onGoBack}>&#8678; Go Back</button>
                    <div className='movie-container'>
                        <div className='movie-image-container'>
                            <img src={movie.img !==null ? ('https://image.tmdb.org/t/p/w400'+movie.img) : ('../image/logo512.png')} alt={movie.name} />
                        </div>
                        <div>
                            <h2 className='movie-name'>{movie.name}</h2>
                            <p>User Score: {movie.score}</p>
                            <h3>Overview:</h3>
                            <p>{movie.overview}</p>
                            <h3>Genres:</h3>
                            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
                        </div>
                    </div>

                    <div className='information-container'>
                    <h3 className="information-title">Additional information</h3>
            
                    <nav>
                        <NavLink
                            to={{pathname: `${url}/cast`,
                                    state: { from: location?.state?.from },
                                }}
                            className='information-link'
                        >
                            Cast
                        </NavLink>

                        <NavLink
                            to={{pathname: `${url}/reviews`,
                                    state: { from: location?.state?.from },
                                }}
                            className='information-link'
                        >
                            Reviews
                        </NavLink>
                    </nav>
                    </div>
                    <Suspense fallback={<h3>Loading</h3>}>
                        <Switch>
                            <Route path={`${path}/cast`} exact>
                                <Cast />
                            </Route>

                            <Route path={`${path}/reviews`} exact>
                                <Reviews />
                            </Route>
                        </Switch>
                    </Suspense>
                </>
            )}
        </>
    )
};

export default MovieDetailsPage;