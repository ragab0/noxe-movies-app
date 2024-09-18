import axios from "axios";

export default function globalFetcher(fullEndpoint) {
  const options = {
    method: "GET",
    url: fullEndpoint,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      // console.log("THE response is: ", response);
      return response;
    })
    .catch(function (error) {
      // console.log("THE error is: ", error);
      return error;
    });
}
