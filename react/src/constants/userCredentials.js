export const client_id = '7cc13947fd874bd18213eba3adcc19ab'; // Your client id
export const client_secret = 'ea9f7d7a8970492b923038318d975405'; // Your secret
export const redirect_uri = 'http://localhost:3000'; // Your redirect uri
export const auth_link = `https://accounts.spotify.com/ru/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;
export const token_link = 'https://accounts.spotify.com/api/token';
export const search_endpoint = 'https://api.spotify.com/v1/search';