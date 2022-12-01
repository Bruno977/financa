import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ButtonSignIn, HeaderContainer, ContainerNavigation } from './styles'

function Header() {
    return (
        <HeaderContainer>
            <ContainerNavigation>
                <nav>
                    <Link to="/">Finança</Link>
                    <ul>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/controll">Controle</NavLink>
                        </li>
                    </ul>
                </nav>
                <ButtonSignIn>button</ButtonSignIn>
            </ContainerNavigation>
        </HeaderContainer>
    )
}

export default Header
