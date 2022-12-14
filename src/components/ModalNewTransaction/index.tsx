import React from 'react'
import { ReactModal } from './styles'

interface ModalNewTransactionProps {
    modalIsOpen: boolean
}

function ModalNewTransaction({ modalIsOpen }: ModalNewTransactionProps) {
    return (
        <ReactModal
            isOpen={modalIsOpen}
            // onRequestClose={closeModal}
            contentLabel="modal New Transaction"
            overlayClassName="overlay-modal"
        >
            <div className="modal-content">I am a modal</div>
        </ReactModal>
    )
}

export default ModalNewTransaction
