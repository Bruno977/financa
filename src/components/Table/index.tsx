import React from 'react'
import { TableContainer } from './styles'
interface TableProps {
    transactions: {
        id: string
        description: string
        category: string
        price: string
        type: string
        createdAt: string
    }[]
}
function Table({ transactions }: TableProps) {
    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Transação</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                {transactions.length ? (
                    transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>Nenhum dado encontrado</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </TableContainer>
    )
}

export default Table
