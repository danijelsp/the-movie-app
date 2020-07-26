// import api
import { loginURL } from "./api";

export default class Auth {
  static login = async (user) => {
    try {
      let res = await fetch(loginURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log("(services/auth.js) login res:", res);
      let data = await res.json();
      // console.log("(services/auth.js) login data:", data);

      return data;
    } catch (err) {
      console.log("(services/auth.js) login err: ", err);
    }
  };
}
