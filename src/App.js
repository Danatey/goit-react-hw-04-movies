import { Switch, Route } from "react-router-dom";

import Appbar from "./components/AppBar";
import HomePage from "./components/HomePage";
import MoviesPageView from "./views/MoviesView";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFoundPage from "./views/NotFoundView";

import "./common.scss";

function App() {
  return (
    <>
      <Appbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPageView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
