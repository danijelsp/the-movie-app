// import auth service
import Auth from "../services/auth";

// auth actions types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

// actions creators
export function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(accessToken) {
  return {
    type: LOGIN_SUCCESS,
    accessToken,
  };
}

export function loginFail({ emailError, passwordError }) {
  return {
    type: LOGIN_FAIL,
    emailError,
    passwordError,
  };
}

export function login(user) {
  return function (dispatch, getState) {
    dispatch(loginRequest(user));

    Auth.login(user)
      .then((data) => {
        // SUCCESS
        if (data.access_token) {
          const accessToken = data.access_token;
          localStorage.setItem("@storage_accessToken", accessToken);
          dispatch(loginSuccess(accessToken));
        }

        // FAIL
        if (data.email && data.password) {
          const error1 = data.email;
          const error2 = data.password;
          if (Array.isArray(error1) && Array.isArray(error2)) {
            dispatch(
              loginFail({ emailError: error1[0], passwordError: error2[0] })
            );
          }
        } else if (data.email) {
          const error = data.email;
          if (Array.isArray(error)) {
            dispatch(loginFail({ emailError: error[0] }));
          }
        } else if (data.password) {
          const error = data.password;
          if (Array.isArray(error)) {
            dispatch(loginFail({ passwordError: error[0] }));
          }
        } else if (data.error) {
          dispatch(loginFail({ passwordError: "Incorrect password." }));
        }
      })
      .catch((error) => {
        if (error && error.message) {
          dispatch(loginFail(error.message));
        }
      });
  };
}

export function logout() {
  localStorage.clear();
  return {
    type: LOGOUT_REQUEST,
  };
}
