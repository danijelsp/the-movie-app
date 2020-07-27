// import dependencies
import { combineReducers } from "redux";

// import reducers
import auth from "./auth";
import movie from "./movie";

export default combineReducers({
  auth,
  movie,
});
