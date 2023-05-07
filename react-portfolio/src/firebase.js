import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyACnuFGoDjLYgUse4UnHH4IBgHVOSDjnCw',
  authDomain: 'portfolio-49f91.firebaseapp.com',
  projectId: 'portfolio-49f91',
  storageBucket: 'portfolio-49f91.appspot.com',
  messagingSenderId: '105528249015',
  appId: '1:105528249015:web:39d876161b299956ef9b32',
  measurementId: 'G-EJ5E9P3GTC',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
