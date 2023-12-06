import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC2kUywyN7LJv80C39BWGLcJLgvkVSJN0",
  authDomain: "news-app-a3bef.firebaseapp.com",
  projectId: "news-app-a3bef",
  storageBucket: "news-app-a3bef.appspot.com",
  messagingSenderId: "613440165990",
  appId: "1:613440165990:web:d277905dfeda97e38e75a7",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
