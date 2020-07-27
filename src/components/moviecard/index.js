// import dependencies
import React from "react";

// import css
import "./styles.css";

// Movie Card
function MovieCard({ title, posterPath, active }) {
  return (
    <div className="movie-container">
      <img
        className={`movie-poster ${active && "active"}`}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        // src={posterPath}
        alt={title}
        // src={
        //   "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        // }
      />
      <div className="movie-title">{active && title}</div>
    </div>
  );
}

export default MovieCard;
