import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seedData";

// config
const config = {
  apiKey: "AIzaSyABDlDsFT8g1qVc3cMzmtDcjpQ5ikAKfoE",
  authDomain: "netflix-clone-22d80.firebaseapp.com",
  projectId: "netflix-clone-22d80",
  storageBucket: "netflix-clone-22d80.appspot.com",
  messagingSenderId: "485366308449",
  appId: "1:485366308449:web:a8e0d960ef5a7d30a5d420",
};

const firebaseApp = firebase.initializeApp(config);
//seedDatabase(firebaseApp);

export { firebaseApp };
