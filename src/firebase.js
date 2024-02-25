// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
	apiKey: 'AIzaSyCVXlSZYFEa7iedi4nhywqBodPMmNHirsw',
	authDomain: 'bruhnetflix-9c891.firebaseapp.com',
	projectId: 'bruhnetflix-9c891',
	storageBucket: 'bruhnetflix-9c891.appspot.com',
	messagingSenderId: '691156627280',
	appId: '1:691156627280:web:840cfe330771e1812c8655',
}
// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
