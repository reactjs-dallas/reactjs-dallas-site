import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// const prodConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

const devConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
};

// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(devConfig);
}

let db, auth;

if (typeof window !== 'undefined') {
  // Gatsby build will fail otherwise
  db = firebase.database();
  auth = firebase.auth();
}

export { db, auth };
