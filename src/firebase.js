import firebase from 'firebase/app';
import 'firebase/firestore';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_NofFSKWQeARWDW4WRCn2KX8aChkpdU",
  authDomain: "expenses-52815.firebaseapp.com",
  projectId: "expenses-52815",
  storageBucket: "expenses-52815.appspot.com",
  messagingSenderId: "1056395382752",
  appId: "1:1056395382752:web:ac101ab1a0dcd9f92ce585"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export default firebase;