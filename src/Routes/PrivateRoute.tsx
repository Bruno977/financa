import React, { useContext } from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export function PrivateRoute() {
    const { logged } = useContext(AuthContext)

    return logged ? <Outlet /> : <Navigate to="/" />
}
