import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCt91Yyf0su0dtcD1cr6nci7j6TeLGbl-0",
    authDomain: "login2-66aa0.firebaseapp.com",
    projectId: "login2-66aa0",
    storageBucket: "login2-66aa0.appspot.com",
    messagingSenderId: "288132684001",
    appId: "1:288132684001:web:827eb68492a6b53c39ffa0"
  };

  const app=initializeApp(firebaseConfig);

  export const auth=getAuth();
  export const db=getFirestore(app);
  export default app;
