// import dependencies
import React from "react";
import { useSelector } from "react-redux";

// import containers
import Login from "../login";
import Movies from "../movies";

function Main() {
  const accessToken = useSelector((state) => state.auth.accessToken);

  if (accessToken) {
    return <Movies />;
  } else {
    return <Login />;
  }
}

export default Main;
