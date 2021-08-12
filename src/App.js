import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Appbar from "./components/AppBar";

import "./common.scss";

const HomePage = lazy(() =>
  import("./components/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesView.jsx" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage.jsx" /* webpackChunkName: "MoviesPage" */)
);

function App() {
  return (
    <>
      <Appbar />
      <Suspense fallback={<h3>Loading</h3>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
