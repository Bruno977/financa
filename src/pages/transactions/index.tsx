import { limitToLast, onValue, query, ref } from 'firebase/database'
import React, { useContext, useEffect, useState } from 'react'
import ButtonNewTransaction from '../../components/ButtonNewTransaction'
import ModalNewTransaction from '../../components/ModalNewTransaction'
import SearchTransaction from '../../components/SearchTransaction'
import Table from '../../components/Table'
import { AuthContext } from '../../contexts/AuthContext'
import { database } from '../../services/firebase'
import { Container, TitleContainer } from './styles'

interface TransactionsProps {
    id: string
    description: string
    category: string
    price: string
    type: string
    createdAt: string
    empty?: string
}
type FirebaseQuestions = Record<
    string,
    {
        id: string
        description: string
        category: string
        price: string
        type: string
        createdAt: string
        empty?: string
    }
>

function Controls() {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)

    const [transactions, setTransactions] = useState<TransactionsProps[]>([])
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
                // const queryTransactions = query(
                //     ref(database, `users/${user?.id}/transactions`),
                //     limitToLast(5)
                // )
                // get(queryTransactions)
                //     .then((snapshot) => {
                //         if (snapshot.exists()) {
                //             const firebaseQuestions: FirebaseQuestions =
                //                 snapshot.val()
                //             const transactionsSnapshot = Object.entries(
                //                 firebaseQuestions
                //             ).map(([key, value]) => {
                //                 return {
                //                     id: key,
                //                     description: value.description,
                //                     price: value.price,
                //                     category: value.category,
                //                     type: value.type,
                //                 }
                //             })
                //             setTransactions(transactionsSnapshot)
                //         } else {
                //             console.log('No data available')
                //         }
                //     })
                //     .catch((error) => {
                //         console.error(error)
                //     })

                const queryTransactions = query(
                    ref(database, `users/${user?.id}/transactions`),
                    limitToLast(5)
                )

                onValue(queryTransactions, (snapshot) => {
                    if (snapshot.exists()) {
                        const firebaseQuestions: FirebaseQuestions =
                            snapshot.val()
                        const transactionsSnapshot = Object.entries(
                            firebaseQuestions
                        ).map(([key, value]) => {
                            return {
                                id: key,
                                description: value.description,
                                price: value.price,
                                category: value.category,
                                type: value.type,
                                createdAt: value.createdAt,
                            }
                        })
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
                        // console.log('Nenhum Dado encontrado')
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
            <Table transactions={transactions} loading={loading} />
            <ModalNewTransaction
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </Container>
    )
}

export default Controls
