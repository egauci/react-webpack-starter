/*
 * - App config values.
 */

// set a path prefix for router based on current window location at load time.
// This assumes that when we run in production, the app will not be at the server
// root. So, if app is at http://www.example.com/myApp/ then set pref to /myApp.
let pref;
if (window.location.pathname.includes('myApp')) {
  pref = '/myApp';
} else {
  pref = '';
}

export const pathPref = pref;
