import React from 'react'
import ButtonNewTransaction from '../../components/ButtonNewTransaction'
import SearchTransaction from '../../components/SearchTransaction'
import Table from '../../components/Table'
import { Container, TitleContainer } from './styles'

function Controls() {
    return (
        <Container>
            <TitleContainer>
                <h1>Minhas Transações</h1>
                <ButtonNewTransaction />
            </TitleContainer>

            <SearchTransaction />
            <Table />
        </Container>
    )
}

export default Controls
