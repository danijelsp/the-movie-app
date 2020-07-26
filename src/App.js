// import dependencies
import React, { useEffect, useState } from "react";
import "./App.css";

// import containers
import Login from "./containers/login";
import Movies from "./containers/movies";

// import components
import Spinner from "./components/spinner";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("@storage_accessToken");
    if (accessToken) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [loggedIn]);

  return (
    <div className="App">
      {loading ? <Spinner /> : loggedIn ? <Movies /> : <Login />}
    </div>
  );
}

export default App;
