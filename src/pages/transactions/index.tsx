import { limitToLast, onValue, query, ref } from 'firebase/database'
import React, { useContext, useEffect, useState } from 'react'
import ButtonNewTransaction from '../../components/ButtonNewTransaction'
import ModalNewTransaction from '../../components/ModalNewTransaction'
import SearchTransaction from '../../components/SearchTransaction'
import Table from '../../components/Table'
import { AuthContext } from '../../contexts/AuthContext'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useTransaction } from '../../hooks/useTransaction'
import { database } from '../../services/firebase'
import { Container, TitleContainer } from './styles'

function Controls() {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const { setTransactions } = useContext(TransactionsContext)

    function handleOpenModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    async function getTransactions() {
        try {
            setLoading(true)
            if (user) {
                const queryTransactions = query(
                    ref(database, `users/${user?.id}/transactions`)
                    // limitToLast(5)
                )

                onValue(queryTransactions, (snapshot) => {
                    if (snapshot.exists()) {
                        const { transactionsSnapshot } = useTransaction(
                            snapshot.val()
                        )
                        setTransactions(transactionsSnapshot)

                        setLoading(false)
                    } else {
                        setTransactions([
                            {
                                id: '',
                                description: '',
                                createdAt: '',
                                price: '',
                                category: '',
                                type: '',
                                empty: 'Nenhum Dado encontrado',
                            },
                        ])
                        setLoading(false)
                    }
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            // setLoading(false)
        }
    }
    useEffect(() => {
        getTransactions()
    }, [user])

    return (
        <Container>
            <TitleContainer>
                <h1>Minhas Transações</h1>
                <ButtonNewTransaction handleOpenModal={handleOpenModal} />
            </TitleContainer>

            <SearchTransaction />
            <Table loading={loading} />
            <ModalNewTransaction
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </Container>
    )
}

export default Controls
