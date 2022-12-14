import React from 'react'
import { Button } from './styles'

interface ButtonNewTransactionProps {
    handleOpenModal: () => void
}

function ButtonNewTransaction({ handleOpenModal }: ButtonNewTransactionProps) {
    return <Button onClick={handleOpenModal}>Nova Transação</Button>
}

export default ButtonNewTransaction
