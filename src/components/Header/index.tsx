import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { ButtonSignIn, HeaderContainer, ContainerNavigation } from './styles'

function Header() {
    const { signInWithGoogle, user } = useContext(AuthContext)
    console.log(user)
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
                <ButtonSignIn onClick={signInWithGoogle}>button</ButtonSignIn>
            </ContainerNavigation>
        </HeaderContainer>
    )
}

export default Header
