// import dependencies
import React from "react";

// import css
import "./styles.css";

// Movie Card
function MovieCard({ title, posterPath, active }) {
  return (
    <div className={`movie-container ${active && "active"}`}>
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        // src={posterPath}
        alt={title}
        // src={
        //   "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        // }
      />
    </div>
  );
}

export default MovieCard;
