import React, { createContext, ReactNode, useEffect, useState } from 'react'
import {
    auth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from '../services/firebase'

interface User {
    id: string
    name: string | null
    avatar: string | null
}
interface AuthContextProps {
    children: ReactNode
}
interface AuthContextType {
    signInWithGoogle: () => Promise<void>
    user: User | undefined
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProps) {
    const [user, setUser] = useState<User>()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, uid, photoURL } = user
                if (displayName === null || uid === undefined) {
                    throw new Error('Existem informações pendentes')
                }
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL,
                })
            }
        })
    }, [])
    async function signInWithGoogle() {
        try {
            const provider = new GoogleAuthProvider()
            const signIn = await signInWithPopup(auth, provider)
            const { displayName, uid, photoURL } = signIn.user
            if (displayName === null || uid === undefined) {
                throw new Error('Existem informações pendentes')
            }
            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL,
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <AuthContext.Provider value={{ signInWithGoogle, user }}>
            {children}
        </AuthContext.Provider>
    )
}
