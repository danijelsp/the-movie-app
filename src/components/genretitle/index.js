// import dependencies
import React from "react";

// import css
import "./styles.css";

// Genre Title
function GenreTitle({ title }) {
  return (
    <div className="title-container">
      <p className="title">{title}</p>
    </div>
  );
}

export default GenreTitle;
