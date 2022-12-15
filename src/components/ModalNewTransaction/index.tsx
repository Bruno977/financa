import React, { useState } from 'react'
import { FaArrowCircleDown, FaArrowCircleUp, FaTimes } from 'react-icons/fa'
import {
    ButtonTransaction,
    ReactModal,
    TransactionTypeContainer,
} from './styles'

interface ModalNewTransactionProps {
    modalIsOpen: boolean
    closeModal: () => void
}

function ModalNewTransaction({
    modalIsOpen,
    closeModal,
}: ModalNewTransactionProps) {
    const [type, setType] = useState('income')
    return (
        <ReactModal
            isOpen={modalIsOpen}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            overlayClassName="overlay-modal"
            ariaHideApp={false}
        >
            <form className="modal-content">
                <span className="close-modal" onClick={closeModal}>
                    <FaTimes size={20} />
                </span>
                <h4>Nova transação</h4>
                <input type="text" placeholder="Descrição" />
                <input type="text" placeholder="Preço" />
                <input type="text" placeholder="Categoria" />
                <TransactionTypeContainer>
                    <ButtonTransaction
                        type="button"
                        onClick={() => setType('income')}
                        isActive={type === 'income'}
                        activeColor="green"
                    >
                        <FaArrowCircleUp />
                        <span>Entrada</span>
                    </ButtonTransaction>
                    <ButtonTransaction
                        type="button"
                        onClick={() => setType('outcome')}
                        isActive={type === 'outcome'}
                        activeColor="red"
                    >
                        <FaArrowCircleDown />
                        <span>Saída</span>
                    </ButtonTransaction>
                </TransactionTypeContainer>
                <button type="submit">Cadastrar</button>
            </form>
        </ReactModal>
    )
}

export default ModalNewTransaction
