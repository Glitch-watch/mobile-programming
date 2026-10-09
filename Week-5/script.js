  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB7UAtgsO8HsGTJrjnZ-nPqfrIKDywLsbk",
    authDomain: "mobile-programming-a81da.firebaseapp.com",
    projectId: "mobile-programming-a81da",
    storageBucket: "mobile-programming-a81da.firebasestorage.app",
    messagingSenderId: "852165434816",
    appId: "1:852165434816:web:43b8e1f53113534e083c25",
    measurementId: "G-BZHDBNFKDM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)
  console.log(db)
  const analytics = getAnalytics(app);