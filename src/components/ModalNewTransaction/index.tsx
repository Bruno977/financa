import { push, ref, set } from 'firebase/database'
import React, { useState, useContext } from 'react'
import { FaArrowCircleDown, FaArrowCircleUp, FaTimes } from 'react-icons/fa'
import { database } from '../../services/firebase'
import {
    ButtonTransaction,
    ReactModal,
    TransactionTypeContainer,
} from './styles'

import { AuthContext } from '../../contexts/AuthContext'

interface ModalNewTransactionProps {
    modalIsOpen: boolean
    closeModal: () => void
}
interface formDataProps {
    description: string
    price: string
    category: string
    type: string
}

function ModalNewTransaction({
    modalIsOpen,
    closeModal,
}: ModalNewTransactionProps) {
    const [formData, setFormData] = useState<formDataProps>({
        description: '',
        price: '',
        category: '',
        type: 'income',
    })

    const { user } = useContext(AuthContext)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const TransactionRef = ref(database, `users/${user?.id}/transactions`)
        const newTransactionRef = push(TransactionRef)
        set(newTransactionRef, {
            description: formData.description,
            price: formData.price,
            category: formData.category,
            type: formData.type,
        })
    }
    return (
        <ReactModal
            isOpen={modalIsOpen}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            overlayClassName="overlay-modal"
            ariaHideApp={false}
        >
            <form className="modal-content" onSubmit={handleSubmit}>
                <span className="close-modal" onClick={closeModal}>
                    <FaTimes size={20} />
                </span>
                <h4>Nova transação</h4>
                <input
                    type="text"
                    placeholder="Descrição"
                    value={formData.description}
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            description: target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Preço"
                    value={formData.price}
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            price: target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    value={formData.category}
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            category: target.value,
                        })
                    }
                />
                <TransactionTypeContainer>
                    <ButtonTransaction
                        type="button"
                        onClick={() =>
                            setFormData({
                                ...formData,
                                type: 'income',
                            })
                        }
                        isActive={formData.type === 'income'}
                        activeColor="green"
                    >
                        <FaArrowCircleUp />
                        <span>Entrada</span>
                    </ButtonTransaction>
                    <ButtonTransaction
                        type="button"
                        onClick={() =>
                            setFormData({
                                ...formData,
                                type: 'outcome',
                            })
                        }
                        isActive={formData.type === 'outcome'}
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
