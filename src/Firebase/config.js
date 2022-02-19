
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv4Cx66q-5-BbAwZpLvcp8eI-mzOvExMA",
  authDomain: "netflixclone-2d013.firebaseapp.com",
  projectId: "netflixclone-2d013",
  storageBucket: "netflixclone-2d013.appspot.com",
  messagingSenderId: "791775763180",
  appId: "1:791775763180:web:99a6e7c048b701fb1de3c9"
};



const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const  auth=getAuth(app);