import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCuxfzVqj6GCVk5K1kuMTHy5zbipW5TXeU",
  authDomain: "projectwebapp-2371f.firebaseapp.com",
  databaseURL: "https://projectwebapp-2371f-default-rtdb.firebaseio.com",
  projectId: "projectwebapp-2371f",
  storageBucket: "projectwebapp-2371f.appspot.com",
  messagingSenderId: "621414708453",
  appId: "1:621414708453:web:2416c1c9a132599e2b900c",
  measurementId: "G-M214DJPR14"
})

export const auth = app.auth()
export default app
