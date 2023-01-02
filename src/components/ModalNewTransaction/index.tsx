import { push, ref, set } from 'firebase/database'
import React, { useState, useContext } from 'react'
import { FaArrowCircleDown, FaArrowCircleUp, FaTimes } from 'react-icons/fa'
import { database } from '../../services/firebase'
import {
    ButtonTransaction,
    InputLabel,
    ReactModal,
    TransactionTypeContainer,
} from './styles'

import { AuthContext } from '../../contexts/AuthContext'
import CurrencyInput from 'react-currency-input-field'
import { format } from 'date-fns'

interface ModalNewTransactionProps {
    modalIsOpen: boolean
    closeModal: () => void
}
interface formDataProps {
    description: string
    price: string | undefined
    category: string
    type: string
    createdAt: string
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
        createdAt: '',
    })

    const { user } = useContext(AuthContext)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const TransactionRef = ref(
                database,
                `users/${user?.id}/transactions`
            )
            const newTransactionRef = push(TransactionRef)
            set(newTransactionRef, {
                description: formData.description,
                price: formData.price,
                category: formData.category,
                type: formData.type,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
            })
            setFormData({
                description: '',
                price: '',
                category: '',
                type: 'income',
                createdAt: '',
            })
        } catch (error) {
            console.log('Erro')
        }
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
                    required
                    placeholder="Descrição"
                    value={formData.description}
                    onChange={({ target }) =>
                        setFormData({
                            ...formData,
                            description: target.value,
                        })
                    }
                />
                <InputLabel>
                    <label>R$</label>
                    <CurrencyInput
                        placeholder="Preço"
                        // defaultValue={1000}
                        // intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                        required
                        decimalsLimit={2}
                        groupSeparator="."
                        value={formData.price}
                        decimalSeparator=","
                        onValueChange={(value) =>
                            setFormData({
                                ...formData,
                                price: value,
                            })
                        }
                    />
                </InputLabel>

                <input
                    type="text"
                    placeholder="Categoria"
                    required
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
