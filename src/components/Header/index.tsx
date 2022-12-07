import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

import {
    ButtonSignIn,
    HeaderContainer,
    ContainerNavigation,
    Avatar,
} from './styles'

import { FaGoogle, FaRegUserCircle, FaTimes } from 'react-icons/fa'

function Header() {
    const { signInWithGoogle, user, signOutGoogle } = useContext(AuthContext)

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
                {user ? (
                    <ButtonSignIn onClick={signOutGoogle}>
                        {user.avatar !== null ? (
                            <Avatar src={user.avatar} alt="" />
                        ) : (
                            <FaRegUserCircle />
                        )}
                        <span>{user.name}</span>
                        <FaTimes />
                    </ButtonSignIn>
                ) : (
                    <ButtonSignIn onClick={signInWithGoogle}>
                        <FaGoogle />
                        <span>Entrar com google</span>
                    </ButtonSignIn>
                )}
            </ContainerNavigation>
        </HeaderContainer>
    )
}

export default Header
