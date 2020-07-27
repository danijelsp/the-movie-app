// import movie actions types
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAIL,
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_ALL_MOVIES_FAIL,
} from "../actions/movie";

const initialState = {
  loading: false,
  loadingAllMovies: false,
  allMovies: {},
  moviesWithGenre: [],
  error: null,
};

// movie reducer
export default function movie(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        moviesWithGenre: action.moviesWithGenre,
        error: null,
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        moviesWithGenre: [],
        error: action.error,
      };
    case FETCH_ALL_MOVIES_REQUEST:
      return {
        ...state,
        loadingAllMovies: true,
        error: null,
      };
    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: action.allMovies,
        error: null,
        loadingAllMovies: false,
      };
    case FETCH_ALL_MOVIES_FAIL:
      return {
        ...state,
        loadingAllMovies: false,
        allMovies: {},
        error: action.error,
      };
    default:
      return state;
  }
}
