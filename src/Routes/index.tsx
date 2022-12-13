import React, { useContext, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { AuthContext } from '../contexts/AuthContext'
import Transactions from '../pages/transactions'
import Dashboard from '../pages/dashboard'
import Home from '../pages/Home'
import { PrivateRoute } from './PrivateRoute'

function Router() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { logged } = useContext(AuthContext)
    useEffect(() => {
        if (logged && pathname === '/') {
            navigate('/dashboard')
        }
    }, [navigate, logged])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/controll" element={<Transactions />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Router
