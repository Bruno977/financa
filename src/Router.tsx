import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Transactions from './pages/transactions'
import Dashboard from './pages/dashboard'
import Home from './pages/Home'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transaction" element={<Transactions />} />
            </Route>
        </Routes>
    )
}

export default Router
