import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// GANTI DENGAN CONFIG FIREBASE LO SENDIRI!
const firebaseConfig = {
  apiKey: "AIzaSyBc40PhCjvxQvr3GqactJd3zkZqELhW0VA",
  authDomain: "cybernoir-game.firebaseapp.com",
  projectId: "cybernoir-game",
  storageBucket: "cybernoir-game.firebasestorage.app",
  messagingSenderId: "1093030267928",
  appId: "1:1093030267928:web:52fffcadc4a35118c9076d"
}

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig)

// Export services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Export functions
export { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  updateProfile,
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  arrayUnion 
}
