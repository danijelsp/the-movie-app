// import dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import genres from "../../redux/services/genres.json";

// import actions
import { logout } from "../../redux/actions/auth";
import { fetchAllMovies } from "../../redux/actions/movie";

// import components
import Spinner from "../../components/spinner";
import GenreTitle from "../../components/genretitle";
import Modal from "../../components/modal";
import MovieCard from "../../components/moviecard";

// import css
import "./styles.css";

// Movies
function Movies() {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(0);
  const [movie, setMovie] = useState({});
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const dispatch = useDispatch();
  const loadingAllMovies = useSelector((state) => state.movie.loadingAllMovies);
  const allMovies = useSelector((state) => state.movie.allMovies);

  // handle methodes
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  function downHandler({ key, keyCode }) {
    // LEFT ARROW PRESS
    if (keyCode === 37 && yIndex > 0 && !modalIsVisible) {
      setYIndex(yIndex - 1);
    }
    // UP ARROW PRESS
    else if (keyCode === 38 && xIndex > 0 && !modalIsVisible) {
      setXIndex(xIndex - 1);
    }
    // RIGHT ARROW PRESS
    // FIX ME: 19 is hard coded, fetch 20 movies per genre
    else if (keyCode === 39 && yIndex < 19 && !modalIsVisible) {
      setYIndex(yIndex + 1);
    }
    // DOWN ARROW PRESS
    else if (keyCode === 40 && xIndex < genres.length - 1 && !modalIsVisible) {
      setXIndex(xIndex + 1);
    }
    // ENTER PRESS
    else if (keyCode === 13 && !modalIsVisible) {
      const genre = genres[xIndex];
      const key = genre.name;
      const genreMovies = allMovies[key];
      const movie = genreMovies[yIndex];
      setMovie(movie);
      setModalIsVisible(true);
    }
    // ESC PRESS
    else if (keyCode === 27) {
      setModalIsVisible(false);
    }
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

  return (
    <div className="movies-container">
      <div className="navbar">
        <div className="logo"></div>
        <button className="ghost-button" type="submit" onClick={handleSubmit}>
          Log out
        </button>
      </div>
      {loadingAllMovies ? (
        <Spinner />
      ) : (
        <>
          {genres.map((genre, genreIndex) => (
            <div className="genre-container" key={genre.name}>
              <GenreTitle title={genre.name} />
              <div className="genre-row">
                {allMovies[genre.name] &&
                  allMovies[genre.name].map((movie, movieIndex) => (
                    <MovieCard
                      key={genreIndex + "" + movieIndex}
                      posterPath={movie.backdrop_path}
                      title={movie.title}
                      overview={movie.overview}
                      average={movie.vote_average}
                      active={
                        xIndex + "" + yIndex === genreIndex + "" + movieIndex
                      }
                    />
                  ))}
              </div>
            </div>
          ))}
        </>
      )}
      <Modal
        isVisible={modalIsVisible}
        title={movie.title}
        overview={movie.overview}
        voteAverage={movie.vote_average}
      />
    </div>
  );
}

export default Movies;
