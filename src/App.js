// import {
//   getTrending,
//   getSearchMovies,
//   getMovieDetails,
//   getMovieCredits,
//   getMovieReviews
// } from "./services/API";

import { Switch, Route } from "react-router-dom";

import Appbar from "./components/AppBar";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <>
      <Appbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId" exact>
          <MovieDetailsPage />
        </Route>

        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
