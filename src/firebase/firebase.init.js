// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBFnylbUgowHOUmJtZnNcO1GSjn7a2brbg",
  authDomain: "computir-cloud.firebaseapp.com",
  projectId: "computir-cloud",
  storageBucket: "computir-cloud.appspot.com",
  messagingSenderId: "209296386608",
  appId: "1:209296386608:web:483bf518a36fdde926dbf5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
