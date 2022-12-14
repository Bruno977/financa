import React, { useContext } from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export function PrivateRoute() {
    const { logged } = useContext(AuthContext)

    if (!logged) {
        return <Navigate to="/login" />
    } else {
        return <Outlet />
    }
}
