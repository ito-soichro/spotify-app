// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = 
"https://accounts.spotify.com/authorize";


// // Spotify for Developerから引用
const redirectUri = "http://localhost:3000/";

const clientID = "f7b768418c9a4246816351ba46e0b52f";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
  )}&response_type=token&show_dialog=true`;

