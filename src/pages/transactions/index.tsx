import React from 'react'
import ButtonNewTransaction from '../../components/ButtonNewTransaction'
import ModalNewTransaction from '../../components/ModalNewTransaction'
import SearchTransaction from '../../components/SearchTransaction'
import Table from '../../components/Table'
import { Container, TitleContainer } from './styles'

function Controls() {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    function handleOpenModal() {
        setIsOpen(true)
    }
    return (
        <Container>
            <TitleContainer>
                <h1>Minhas Transações</h1>
                <ButtonNewTransaction handleOpenModal={handleOpenModal} />
            </TitleContainer>

            <SearchTransaction />
            <Table />
            <ModalNewTransaction modalIsOpen={modalIsOpen} />
        </Container>
    )
}

export default Controls
