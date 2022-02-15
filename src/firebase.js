import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFaMmkHJ8vitHE2tnRnyKVB5iKrxzzVWI",
  authDomain: "simple-snake-872fa.firebaseapp.com",
  projectId: "simple-snake-872fa",
  storageBucket: "simple-snake-872fa.appspot.com",
  messagingSenderId: "921106468228",
  appId: "1:921106468228:web:59a29a800ca49059afa1d1"
}

initializeApp(firebaseConfig)

// init services
export const db = getFirestore()
export const auth = getAuth()