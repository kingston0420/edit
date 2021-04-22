import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    apiKey: "AIzaSyAQxzSAsjmT3L5ru8sQOcQw4Am9S3A4yAo",
    authDomain: "edit-76d35.firebaseapp.com",
    projectId: "edit-76d35",
    storageBucket: "edit-76d35.appspot.com",
    messagingSenderId: "508197995981",
    appId: "1:508197995981:web:26ca4050f5fd41228ab084",
    measurementId: "G-8N7D1HKXLE" })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })