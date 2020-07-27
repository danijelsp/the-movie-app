// import api
import { API_KEY, discoverMovieURL } from "./api";

// import genres
import genres from "./genres.json";

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

      // console.log("(services/movie.js) getItemsWithGenre res:", res);
      let data = await res.json();
      // console.log("(services/movie.js) getItemsWithGenre data:", data);

      return data;
    } catch (err) {
      console.log("(services/movie.js) getItemsWithGenre err: ", err);
    }
  };

  static getAllItems = async () => {
    try {
      let data = await Promise.all(
        genres.map((item) => this.getItemsWithGenre(item.id))
      );

      console.log("(services/movie.js) getAllItems data:", data);
      return data;
    } catch (err) {
      console.log("(services/movie.js) getAllItems err: ", err);
    }
  };
}
