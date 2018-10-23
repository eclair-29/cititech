import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC34XddKq22yi__ouSh4i1NdyY5TFsqSw0",
    authDomain: "ct-stage2.firebaseapp.com",
    databaseURL: "https://ct-stage2.firebaseio.com",
    projectId: "ct-stage2",
    storageBucket: "ct-stage2.appspot.com",
    messagingSenderId: "1097623898080"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase