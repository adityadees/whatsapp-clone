import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWEmgm8XPWipbbSPv4hGCPNg6WJpX0AQg",
    authDomain: "whatsapp-61078.firebaseapp.com",
    projectId: "whatsapp-61078",
    storageBucket: "whatsapp-61078.appspot.com",
    messagingSenderId: "388495925490",
    appId: "1:388495925490:web:5474563add1bbb2a36706b",
    measurementId: "G-PCPPJY2GJB"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}