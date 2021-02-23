import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAC81q2k6zLMgW5uke8n2pUJdMSda_stmM",
  authDomain: "slack-react-clone-ea397.firebaseapp.com",
  databaseURL: "https://slack-react-clone-ea397.firebaseio.com",
  projectId: "slack-react-clone-ea397",
  storageBucket: "slack-react-clone-ea397.appspot.com",
  messagingSenderId: "189511522444",
  appId: "1:189511522444:web:445453afa3df96dfec03a9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //for db connect

const auth = firebase.auth(); //for auth protocols

const provider = new firebase.auth.GoogleAuthProvider(); //for auth login process

export { auth, provider };
export default db;
