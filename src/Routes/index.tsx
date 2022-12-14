import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Transactions from '../pages/transactions'
import Dashboard from '../pages/dashboard'
import { PrivateRoute } from './PrivateRoute'
import Login from '../pages/Login'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Router
