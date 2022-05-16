import { initializeApp } from "firebase/app";

// firebase configuration
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
});

export default app;

/* 
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyCCZMopEM4MJAt8Jh7NS1e8SrsnmOL35BM",
  authDomain: "azur-quiz.firebaseapp.com",
  projectId: "azur-quiz",
  storageBucket: "azur-quiz.appspot.com",
  messagingSenderId: "379010726279",
  appId: "1:379010726279:web:f6b3ee0a347cd1a145fb22",
});

export default app; */
