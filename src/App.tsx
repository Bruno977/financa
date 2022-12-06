import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { AuthContextProvider } from './contexts/AuthContext'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AuthContextProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </AuthContextProvider>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
