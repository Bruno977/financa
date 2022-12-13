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

import { FaGoogle, FaRegUserCircle, FaTimes, FaChartBar } from 'react-icons/fa'

function Header() {
    const { signInWithGoogle, user, signOutGoogle, logged } =
        useContext(AuthContext)

    return (
        <HeaderContainer>
            <ContainerNavigation>
                <nav>
                    <Link to="/">
                        <FaChartBar size={40} />
                    </Link>
                    <ul>
                        {logged ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/controll">Transações</NavLink>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
                {user ? (
                    <ButtonSignIn onClick={signOutGoogle} logged>
                        {user.avatar !== null ? (
                            <Avatar
                                src={user.avatar}
                                alt=""
                                referrerPolicy="no-referrer"
                            />
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
