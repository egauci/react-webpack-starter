/*
 * - App config values.
 */

// set a path prefix for router based on current window location at load time.
// This assumes that when we run in production. This assumes the app root is
// zero or one level from the web root. For example:
// http://www.example.com/myApp/   or   http://www.example.com/

const splitPath = location.pathname.split('/');
export const pathPref = splitPath.length === 2 ? '' : `/${splitPath[1]}`;

console.log(`Path Pref: ${pathPref}`);

export const numbersApiUrl = 'https://numbersapi.p.mashape.com/random/trivia?fragment=false&json=true';
