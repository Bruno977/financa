import {
    equalTo,
    get,
    limitToLast,
    orderByChild,
    query,
    ref,
} from 'firebase/database'
import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AuthContext } from '../../contexts/AuthContext'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useTransaction } from '../../hooks/useTransaction'
import { database } from '../../services/firebase'
import { Search } from './styles'

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

function SearchTransaction() {
    const [search, setSearch] = useState('')
    const { user } = useContext(AuthContext)
    const { setTransactions } = useContext(TransactionsContext)

    async function handleSearchTransaction() {
        if (user) {
            const mostViewedPosts = query(
                ref(database, `users/${user.id}/transactions`),
                orderByChild('description'),
                equalTo(search)
            )
            const response = await get(mostViewedPosts)
            if (response.exists()) {
                const firebaseQuestions: FirebaseQuestions = response.val()

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
            } else {
                console.log('no data available')
            }
        }
    }
    async function handleChangeSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
        if (e.target.value === '') {
            const queryTransactions = query(
                ref(database, `users/${user?.id}/transactions`),
                limitToLast(10)
            )
            const response = await get(queryTransactions)
            if (response.exists()) {
                const { transactionsSnapshot } = useTransaction(response.val())
                setTransactions(transactionsSnapshot)
            } else {
                console.log('no data available')
            }
        }
    }
    return (
        <Search>
            <input
                type="text"
                placeholder="Busque uma transação"
                onChange={(e) => handleChangeSearch(e)}
            />
            <button type="button" onClick={handleSearchTransaction}>
                <FaSearch />
                <span>Pesquisar</span>
            </button>
        </Search>
    )
}

export default SearchTransaction
