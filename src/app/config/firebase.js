import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyDUSkABH0ZWnYtGInmS4ViU-Ajrlrd1ffo",
   authDomain: "revents-62865.firebaseapp.com",
   databaseURL: "https://revents-62865.firebaseio.com",
   projectId: "revents-62865",
   storageBucket: "revents-62865.appspot.com",
   messagingSenderId: "41583389752"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);
export default firebase;