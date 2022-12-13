import React, { useContext } from 'react'
import imageHome from '../../assets/images/image-home.svg'
import { AuthContext } from '../../contexts/AuthContext'
import { Container, Description, ImageContainer } from './style'

function Home() {
    const { signInWithGoogle } = useContext(AuthContext)
    return (
        <Container>
            <Description>
                <p>👋 Olá, Seja Bem-Vindo</p>
                <h1>
                    Tenha controle sobre <br />
                    suas <span>Finanças</span>
                </h1>
                <p>Crie sua conta e tenha acesso gratuito</p>
                <button onClick={signInWithGoogle}>
                    Entrar com sua conta google
                </button>
            </Description>
            <ImageContainer>
                <img src={imageHome} alt="" />
            </ImageContainer>
        </Container>
    )
}

export default Home
