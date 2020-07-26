// import dependencies
import React, { useState } from "react";

// import css
import "./styles.css";

// Login container
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

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
    const user = {
      email: email,
      password: password,
    };

    setEmailError(null);
    setPasswordError(null);

    login(user).then((data) => {
      if (data.email) {
        const error = data.email;
        if (Array.isArray(error)) {
          setEmailError(error[0]);
        }
      }
      if (data.error) {
        const error = data.error;
        if (error === "Unauthorized") {
          setPasswordError(error);
        }
      }
      if (data.password) {
        const error = data.password;
        if (Array.isArray(error)) {
          setPasswordError(error[0]);
        }
      }
    });
    event.preventDefault();
  };

  const login = async (user) => {
    try {
      let res = await fetch("http://dev.api.kabox.io/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("(services/auth.js) login res:", res);
      let data = await res.json();
      console.log("(services/auth.js) login data:", data);

      return data;
    } catch (err) {
      console.log("(services/auth.js) login err: ", err);
    }
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default Login;
