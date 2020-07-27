// import dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import genres from "../../redux/services/genres.json";

// import actions
import { logout } from "../../redux/actions/auth";
import { fetchAllMovies } from "../../redux/actions/movie";

// import components
import Spinner from "../../components/spinner";
import GenreTitle from "../../components/genretitle";
import MovieCard from "../../components/moviecard";

// import css
import "./styles.css";

// Movies
function Movies() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movie.loading);
  const loadingAllMovies = useSelector((state) => state.movie.loadingAllMovies);
  const allMovies = useSelector((state) => state.movie.allMovies);

  // handle methodes
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  // const handleKeyDown = (e) => {
  //   if (e.keyCode === 37) {
  //     console.log("Pres left arrow");
  //   } else if (e.keyCode === 38) {
  //     console.log("Pres up arrow");
  //   } else if (e.keyCode === 39) {
  //     console.log("Pres right arrow");
  //   } else if (e.keyCode === 40) {
  //     console.log("Pres down arrow");
  //   }
  // };

  function downHandler({ key, keyCode }) {
    // console.log("press key, keyCode", key, keyCode);
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  // console.log("allMovies:", allMovies);
  // console.log("typeof allMovies", typeof allMovies);
  // console.log("Object.keys(allMovies):", Object.keys(allMovies));
  // console.log("allMovies[Action]:", allMovies["Action"]);
  // console.log("allMovies.Action:", allMovies.Action);
  // console.log("Object.values(allMovies):", Object.values(allMovies));
  // console.log("allMovies[Adventure]:", allMovies["Adventure"]);
  // console.log("allMovies[Comedy]:", allMovies["Comedy"]);

  return (
    <div className="movies-container">
      <div className="navbar">
        <div className="logo"></div>
        <button className="ghost-button" type="submit" onClick={handleSubmit}>
          Log out
        </button>
      </div>
      {loading || loadingAllMovies ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {genres.map((genre, genreIndex) => (
            <React.Fragment key={genre.name}>
              <GenreTitle title={genre.name} />
              {console.log(
                `allMovies[${genre.name}] body:`,
                allMovies[genre.name]
              )}
              <div className="genre-row">
                {allMovies[genre.name] &&
                  allMovies[genre.name].map((movie, movieIndex) => (
                    <MovieCard
                      key={genreIndex + "" + movieIndex}
                      posterPath={movie.backdrop_path}
                      title={movie.title}
                      overview={movie.overview}
                      average={movie.vote_average}
                    />
                  ))}
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Movies;
