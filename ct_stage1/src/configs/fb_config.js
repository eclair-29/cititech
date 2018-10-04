import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB4EIUkCJOf4E-w47a3P2ejNEJQ9Ztxnlc",
    authDomain: "ct-stage1.firebaseapp.com",
    databaseURL: "https://ct-stage1.firebaseio.com",
    projectId: "ct-stage1",
    storageBucket: "ct-stage1.appspot.com",
    messagingSenderId: "267064094756"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase