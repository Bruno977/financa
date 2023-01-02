import { onValue, query, ref } from 'firebase/database'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { database } from '../services/firebase'
import { useTransaction } from './useTransaction'

interface TransactionsProps {
    id: string
    description: string
    price: string
    type: string
    createdAt: string
}

interface TransactionsPriceProps {
    income: number
    outcome: number
    total: number
    incomeTransaction: TransactionsProps[]
    outcomeTransaction: TransactionsProps[]
}

export function useSummary() {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [summary, setSummary] = useState<TransactionsPriceProps>({
        income: 0,
        outcome: 0,
        total: 0,
        incomeTransaction: [],
        outcomeTransaction: [],
    })
    function getSummary() {
        try {
            setLoading(true)
            if (user) {
                const transactions = query(
                    ref(database, `users/${user.id}/transactions`)
                )
                onValue(transactions, (snapshot) => {
                    if (snapshot.exists()) {
                        const { transactionsSnapshot } = useTransaction(
                            snapshot.val()
                        )
                        const transactionsPrice =
                            transactionsSnapshot.reduce<TransactionsPriceProps>(
                                (acc, transaction) => {
                                    if (transaction.type === 'income') {
                                        acc.income += Number(transaction.price)
                                        acc.total += Number(transaction.price)
                                        acc.incomeTransaction.push(transaction)
                                    } else {
                                        acc.outcome += Number(transaction.price)
                                        acc.total -= Number(transaction.price)
                                        acc.outcomeTransaction.push(transaction)
                                    }
                                    return acc
                                },
                                {
                                    income: 0,
                                    outcome: 0,
                                    total: 0,
                                    incomeTransaction: [],
                                    outcomeTransaction: [],
                                }
                            )
                        setSummary(transactionsPrice)
                        setLoading(false)
                    } else {
                        setLoading(false)
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSummary()
    }, [user])
    return {
        income: summary.income,
        outcome: summary.outcome,
        total: summary.total,
        incomeTransaction: summary.incomeTransaction,
        outcomeTransaction: summary.incomeTransaction,
        loading,
    }
}
