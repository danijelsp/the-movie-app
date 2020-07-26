// import dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { loginSuccess } from "../../redux/actions/auth";

// import containers
import Login from "../login";
import Movies from "../movies";

function Main() {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const [storageAccessToken, setStorageAccessToken] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const value = localStorage.getItem("@storage_accessToken");
    setStorageAccessToken(value);
    if (value) {
      dispatch(loginSuccess(value));
    }
  }, [dispatch]);

  useEffect(() => {
    const value = localStorage.getItem("@storage_accessToken");
    setStorageAccessToken(value);
    if (value) {
      dispatch(loginSuccess(value));
    }
  }, [dispatch, accessToken]);

  if (storageAccessToken) {
    return <Movies />;
  } else {
    return <Login />;
  }
}

export default Main;
