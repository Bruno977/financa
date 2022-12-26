import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from 'react'

interface TransactionsContextProviderProps {
    children: ReactNode
}

interface TransactionsProps {
    id: string
    description: string
    price: string
    category: string
    type: string
    createdAt: string

    empty?: string
}
interface TransactionsContextProps {
    transactions: TransactionsProps[]
    setTransactions: Dispatch<SetStateAction<TransactionsProps[]>>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsContextProvider({
    children,
}: TransactionsContextProviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])
    return (
        <TransactionsContext.Provider value={{ transactions, setTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}
