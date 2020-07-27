// import movie service
import Movie from "../services/movie";

// import genres
import genres from "../services/genres.json";

// movie actions types
export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAIL = "FETCH_MOVIES_FAIL";
export const FETCH_ALL_MOVIES_REQUEST = "FETCH_ALL_MOVIES_REQUEST";
export const FETCH_ALL_MOVIES_SUCCESS = "FETCH_ALL_MOVIES_SUCCESS";
export const FETCH_ALL_MOVIES_FAIL = "FETCH_ALL_MOVIES_FAIL";

// actions creators
export function fetchMoviesRequest() {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
}

export function fetchMoviesSuccess(moviesWithGenre) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    moviesWithGenre,
  };
}

export function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAIL,
    error,
  };
}

export function fetchMoviesWithGenre(genreId) {
  return function (dispatch) {
    dispatch(fetchMoviesRequest());

    Movie.getItemsWithGenre(genreId)
      .then((data) => {
        // SUCCESS
        if (data && data.results) {
          dispatch(fetchMoviesSuccess(data.results));
        }

        // FAIL
        if (data && data.error) {
          dispatch(fetchMoviesFail(data.error));
        }
      })
      .catch((error) => {
        // ERROR
        if (error && error.message) {
          dispatch(fetchMoviesFail(error.message));
        }
      });
  };
}

export function fetchAllMoviesRequest() {
  return {
    type: FETCH_ALL_MOVIES_REQUEST,
  };
}

export function fetchAllMoviesSuccess(allMovies) {
  return {
    type: FETCH_ALL_MOVIES_SUCCESS,
    allMovies,
  };
}

export function fetchAllMoviesFail(error) {
  return {
    type: FETCH_ALL_MOVIES_FAIL,
    error,
  };
}

export function fetchAllMovies() {
  return function (dispatch) {
    dispatch(fetchAllMoviesRequest());

    let allMovies = {};
    const genresLength = genres.length;

    genres.forEach((item, index) => {
      Movie.getItemsWithGenre(item.id)
        .then((data) => {
          // SUCCESS
          if (data && data.results) {
            const results = data.results;
            const name = item.name.toString();
            allMovies[name] = results;

            if (index === genresLength - 1) {
              dispatch(fetchAllMoviesSuccess(allMovies));
            }
          }

          // FAIL
          if (data && data.error) {
            dispatch(fetchAllMoviesFail(data.error));
          }
        })
        .catch((error) => {
          // ERROR
          if (error && error.message) {
            dispatch(fetchAllMoviesFail(error.message));
          }
        });
    });
  };
}
