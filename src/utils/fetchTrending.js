import axios from "axios";

export default function fetchTrending() {
  const options = { method: "GET", headers: { accept: "application/json" } };

  axios("https://api.themoviedb.org/3/authentication", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
