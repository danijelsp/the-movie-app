// import dependencies
import React from "react";
import { useDispatch } from "react-redux";

// import actions
import { logout } from "../../redux/actions/auth";

// import css
import "./styles.css";

// Movies
function Movies() {
  const dispatch = useDispatch();

  // handle methodes
  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.clear();
    dispatch(logout());
  };
  return (
    <div className="movies-container">
      <div className="navbar">
        <div className="logo">Movies</div>
        <button className="ghost-button" type="submit" onClick={handleSubmit}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Movies;
