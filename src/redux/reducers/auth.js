// import auth actions types
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
} from "../actions/auth";

const initialState = {
  loading: false,
  user: null,
  accessToken: null,
  emailError: null,
  passwordError: null,
};

// auth reducer
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        user: action.user,
        emailError: null,
        passwordError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        accessToken: action.accessToken,
        emailError: null,
        passwordError: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        accessToken: null,
        emailError: action.emailError,
        passwordError: action.passwordError,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: false,
        user: null,
        accessToken: null,
        emailError: null,
        passwordError: null,
      };
    default:
      return state;
  }
}
