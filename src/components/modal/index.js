// import dependencies
import React from "react";

// import css
import "./styles.css";

// Modal
function Modal({ isVisible, title, overview, voteAverage }) {
  return (
    <div className={`modal-container ${!isVisible && "hidden"}`}>
      <div className="modal-content">
        <div className="modal-info">
          <div className="modal-title">{title}</div>
          <div className="vote-average">{voteAverage}</div>
        </div>
        <div className="overview">{overview}</div>
      </div>
    </div>
  );
}

export default Modal;
