// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVfV5zdMUFr-ip9wOf8sHdU66IPjniKDA",
  authDomain: "netflix-gpt-9f950.firebaseapp.com",
  projectId: "netflix-gpt-9f950",
  storageBucket: "netflix-gpt-9f950.appspot.com",
  messagingSenderId: "379739441866",
  appId: "1:379739441866:web:eec1967658124cae9a4233",
  measurementId: "G-8HPB6RX9SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();