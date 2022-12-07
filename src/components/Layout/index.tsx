import React from 'react'
// import Footer from '../Footer'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Container } from './style'

function Layout() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            {/* <Footer /> */}
        </>
    )
}

export default Layout
