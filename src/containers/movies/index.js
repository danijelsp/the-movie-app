// import dependencies
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// import actions
import { logout } from "../../redux/actions/auth";
// import Movie from "../../redux/services/movie";

// import components
// import Spinner from "../../components/spinner";
// import GenreTitle from '../../components/GenreTitle';
// import MovieCard from '../../components/MovieCard';

// import css
import "./styles.css";

// Movies
function Movies() {
  const dispatch = useDispatch();

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
    console.log("press key, keyCode", key, keyCode);
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  useEffect(() => {
    // Movie.getItemsWithGenre(28);
  }, []);

  return (
    <div className="movies-container">
      <div className="navbar">
        <div className="logo"></div>
        <button className="ghost-button" type="submit" onClick={handleSubmit}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Movies;
