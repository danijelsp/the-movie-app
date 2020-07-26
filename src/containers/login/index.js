// import dependencies
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import actions
import { login } from "../../redux/actions/auth";

// import components
import Spinner from "../../components/spinner";

// import css
import "./styles.css";

// Login container
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.auth.loading);
  const emailError = useSelector((state) => state.auth.emailError);
  const passwordError = useSelector((state) => state.auth.passwordError);

  const dispatch = useDispatch();

  // handle methodes
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    dispatch(login(user));
  };

  return (
    <div className="container">
      {loading ? (
        <Spinner />
      ) : (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="label">Email address</label>
              <input
                className="input"
                type="email"
                name="email"
                defaultValue={email}
                onChange={handleChange}
                required
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>

            <div className="input-container">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                defaultValue={password}
                onChange={handleChange}
                required
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
            <button className="button" type="submit">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
