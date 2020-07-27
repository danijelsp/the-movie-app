// import api
import { API_KEY, discoverMovieURL } from "./api";

export default class Movie {
  static getItemsWithGenre = async (genre_id) => {
    try {
      let res = await fetch(
        discoverMovieURL + `?with_genres=${genre_id}&api_key=${API_KEY}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("(services/auth.js) getItemsWithGenre res:", res);
      let data = await res.json();
      console.log("(services/movie.js) getItemsWithGenre data:", data);

      return data;
    } catch (err) {
      console.log("(services/movie.js) getItemsWithGenre err: ", err);
    }
  };
}
