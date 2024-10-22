// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJubyveosuEU3xVMtGKoq15nw6H8_Ua-0', // does NOT need to be hidden
  authDomain: 'rival-news.firebaseapp.com',
  projectId: 'rival-news',
  storageBucket: 'rival-news.appspot.com',
  messagingSenderId: '938958904127',
  appId: '1:938958904127:web:16e539949a51474bb9918a',
  measurementId: 'G-74GZ1T0D6Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
