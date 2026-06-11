import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// GANTI DENGAN CONFIG FIREBASE LO SENDIRI!
const firebaseConfig = {
  apiKey: "AIzaSyBc40PhCjvxQvr3GqactJd3zkZqELhW0VA",
  authDomain: "cybernoir-game.firebaseapp.com",
  projectId: "cybernoir-game",
  storageBucket: "cybernoir-game.firebasestorage.app",
  messagingSenderId: "1093030267928",
  appId: "1:1093030267928:web:52fffcadc4a35118c9076d"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
