// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBeGCGCJ8TZ5Z-C1vz02vcAuhMhQNaDOD4",
    authDomain: "ng-login-firebase.firebaseapp.com",
    databaseURL: "https://ng-login-firebase.firebaseio.com",
    projectId: "ng-login-firebase",
    storageBucket: "ng-login-firebase.appspot.com",
    messagingSenderId: "924554406607"
  }
};
