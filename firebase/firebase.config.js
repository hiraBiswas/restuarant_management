// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrmycQOpzjHf1lOZvil3TSPHYeRXn7jIc",
  authDomain: "restuarant-management-cfad5.firebaseapp.com",
  projectId: "restuarant-management-cfad5",
  storageBucket: "restuarant-management-cfad5.appspot.com",
  messagingSenderId: "524358582912",
  appId: "1:524358582912:web:483571654ab5a8c1dc1c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;