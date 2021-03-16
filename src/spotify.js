export const endPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "2278cc15a6a6475da26b914e4c063beb";

const scopes = [
  'user-read-recently-played',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-top-read',
  'user-modify-playback-state',
];
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    },{});
}
export const loginUrl = `${endPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;