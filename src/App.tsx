import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { AuthContextProvider } from './contexts/AuthContext'
import Router from './Routes'
import { TransactionsContextProvider } from './contexts/TransactionsContext'
import { ToastContainer } from 'react-toastify'
import { defaultTheme } from './styles/themes/default'
import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyle } from './styles/global'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AuthContextProvider>
                <TransactionsContextProvider>
                    <BrowserRouter>
                        <Router />
                        <ToastContainer theme="light" />
                    </BrowserRouter>
                </TransactionsContextProvider>
            </AuthContextProvider>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
