import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase.js'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { setDoc, doc, addDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({})

	function singUp(email, password) {
		createUserWithEmailAndPassword(auth, email, password)
		setDoc(doc(db, 'users', email), {
			savedShows: [],
		})
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password)
	}

	function logOut() {
		return signOut(auth)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})
		return () => {
			unsubscribe()
		}
	})

	return (
		<AuthContext.Provider value={{ singUp, logOut, login, user }}>
			{children}
		</AuthContext.Provider>
	)
}

export function UserAuth() {
	return useContext(AuthContext)
}
