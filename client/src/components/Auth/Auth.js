import decode from 'jwt-decode';
import { BrowserRouter } from 'react-router-dom';
import auth0 from 'auth0-js';

const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';

const CLIENT_ID = 'pgXHFKNHmzXbkpeF0IPX9kYFlWXLaMSe';
const CLIENT_DOMAIN = 'cella.auth0.com';
const REDIRECT = 'http://localhost:3000/';
// const SCOPE = '{SCOPE}';
// const AUDIENCE = 'AUDIENCE_ATTRIBUTE';

var auth = new auth0.WebAuth({
  clientID: CLIENT_ID,
  domain: CLIENT_DOMAIN
});

export function login() {
  auth.authorize({
    responseType: 'token id_token',
    redirectUri: REDIRECT,
    // audience: AUDIENCE,
    // scope: SCOPE
  });
}

// this is the logout function. this function will remove the users tokens from local storage
// and then push those changes to the browser history of the path '/' as to 'deauthenticate' the user
export function logout() {
	//these two functions are defined below
  clearIdToken();
  clearAccessToken();
  BrowserRouter.push('/');
}

// this requireAuth function is the simple if statement that will be run each time a path that requires authenticated users is tried to be accessed
export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
  	// simply saying that if the user is not authenticated then the user will be redirected to '/'
    replace({pathname: '/'});
  }
}

// simply a defining function. just getting the id_token from localstorage/
export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

// simply a defining function. just getting the access_token from localstorage/
export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

// simply a defining function. just removing the id_token from localstorage/
function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

// simply a defining function. just removing the id_token from localstorage/
function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
// the regex expression on the first line in the function is finding the hashed path location.
// the regex expression on the second line in the function is returning the match found in the first line, and then decoding the URI while replacing the '+' with ' '
// essentially saying taking out the + signs in the path and replacing them with whitespace.
function getParameterByName(name) {
  let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
// this is setting the accessToken to the local storage. 
// in the second line of the function we are setting ACCESS_TOKEN_KEY to local storage but as the alias 'accessToken' for ease of use later.
export function setAccessToken() {
  let accessToken = getParameterByName('access_token');
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
// this is setting the idToken to the local storage. 
// in the second line of the function we are setting ID_TOKEN_KEY to local storage but as the alias 'idToken' for ease of use later.
export function setIdToken() {
  let idToken = getParameterByName('id_token');
  localStorage.setItem(ID_TOKEN_KEY, idToken);
}

// this function is used for checking if the user is logged in.
// it does this by getting the idToken and then returning if the idToken is true (really checking if it is falsey. eg. null, undefined)
// and checking to make sure the token is not expired.
// if both of the above arguments are true then the user is logged in.
export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

// this function will be getting a new expiration date for the users tokens.
function getTokenExpirationDate(encodedToken) {
	// first we decode the token and set that as the value of token.
  const token = decode(encodedToken);
  // if the token is not expired return null. (using the built in .exp claim in jwt)
  if (!token.exp) { return null; }

  // otherwise we need to give the token a new expiration date.
  // give the constant date the value of a 'Data constructor' (new Date())
  // then set the date into UTC seconds and set that to the token.
  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  // with a new expiration date set in utcseconds added to the token we return it.
  return date;
}

// function to check if the token is expired.
function isTokenExpired(token) {
	// giving the constant expirationDate the value of the above function.
  const expirationDate = getTokenExpirationDate(token);
  // returning the expirationDate constant.
  return expirationDate < new Date();
}