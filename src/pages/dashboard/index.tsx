import { limitToLast, onValue, query, ref } from 'firebase/database'
import React, { useContext, useEffect, useState } from 'react'
import Summary from '../../components/Summary'
import Table from '../../components/Table'
import { AuthContext } from '../../contexts/AuthContext'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useTransaction } from '../../hooks/useTransaction'
import { database } from '../../services/firebase'
import { Container } from './styles'

function Dashboard() {
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const { setTransactions } = useContext(TransactionsContext)

    async function getTransactions() {
        try {
            setLoading(true)
            if (user) {
                const queryTransactions = query(
                    ref(database, `users/${user?.id}/transactions`),
                    limitToLast(10)
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
            <h1>Dashboard</h1>
            <Summary />
            {/* <Chart /> */}
            <div style={{ marginTop: '1.25rem' }}>
                <Table loading={loading} />
            </div>
        </Container>
    )
}

export default Dashboard
