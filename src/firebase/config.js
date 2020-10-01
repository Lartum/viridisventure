import * as firebase from "firebase/app"
// import "firebase/auth";
import "firebase/storage"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyAXLcY7ObEEvnpf2lv7CUxQ5G5G-hnyQYA",
    authDomain: "viridisventure-72fe4.firebaseapp.com",
    databaseURL: "https://viridisventure-72fe4.firebaseio.com",
    projectId: "viridisventure-72fe4",
    storageBucket: "viridisventure-72fe4.appspot.com",
    messagingSenderId: "207186176928",
    appId: "1:207186176928:web:c52eb9b2ff6c24a39352c5",
    measurementId: "G-59D225GPLP"
  };

firebase.initializeApp(config)

const firebaseStorage = firebase.storage()
const firebaseFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { firebaseStorage, firebaseFireStore, timestamp }