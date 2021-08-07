// source: https://developer.spotify.com/documentation/web-playback-sk/quick-start/#

export const authEndpoint = "http://accounts.spotify.com/authorize";

const redirectUri = window.location.href
// const redirectUri = "http://localhost:3000/"
const clientId = "26535d2d2137459dbeba24927b0522c4"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
// #accessToken=mysupersecretkey&name=matthew
        return initial;
      }, {});
  };

export const spotifyUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
