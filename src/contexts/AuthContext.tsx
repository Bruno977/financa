import React, { createContext, ReactNode, useEffect, useState } from 'react'

import {
    auth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
} from '../services/firebase'

interface User {
    id: string
    name: string | null
    avatar: string | null
}
interface AuthContextProps {
    children: ReactNode
}
interface Logged {
    logged: boolean
}
interface AuthContextType {
    signInWithGoogle: () => Promise<void>
    user: User | null
    logged: Logged | boolean
    loading: boolean
    toogleLoading: (value: boolean) => void
    signOutGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProps) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const [logged, setLogged] = useState<Logged | boolean>(() => {
        if (window.localStorage.getItem('logged')) {
            return true
        }
        return false
    })

    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogged(true)
                const { displayName, uid, photoURL } = user
                if (displayName === null || uid === undefined) {
                    throw new Error('Existem informações pendentes')
                }
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL,
                })
                window.localStorage.setItem('logged', 'true')
                setLoading(false)
            } else {
                setLogged(false)
                setLoading(false)
                window.localStorage.removeItem('logged')
                // window.location.href = '/login'
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
            window.localStorage.setItem('logged', 'true')
            setLogged(true)
        } catch (error) {
            console.log(error)
        }
    }

    async function signOutGoogle() {
        try {
            await signOut(auth)
            setUser(null)
            setLogged(false)
            window.location.href = '/login'
            window.localStorage.removeItem('logged')
        } catch (error) {
            console.log(error)
        }
    }

    function toogleLoading(value: boolean) {
        setLoading(value)
    }
    return (
        <AuthContext.Provider
            value={{
                signInWithGoogle,
                user,
                signOutGoogle,
                logged,
                loading,
                toogleLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
