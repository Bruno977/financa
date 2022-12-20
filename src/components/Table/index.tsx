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
        empty?: string
    }[]
    loading: boolean
}
function Table({ transactions, loading }: TableProps) {
    return (
        <TableContainer className={loading ? 'loader' : ''}>
            <thead>
                <tr>
                    <th>Transação</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            {loading ? (
                <tbody>
                    <tr>
                        <td colSpan={4} style={{ textAlign: 'center' }}>
                            Carregando...
                        </td>
                    </tr>
                </tbody>
            ) : (
                <tbody>
                    {transactions.length
                        ? transactions.map((transaction) =>
                              transaction.empty ? (
                                  <tr key={transaction.id}>
                                      <td>Nenhum dado encontrado</td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                              ) : (
                                  <tr key={transaction.id}>
                                      <td>{transaction.description}</td>
                                      <td>{transaction.price}</td>
                                      <td>{transaction.category}</td>
                                      <td>
                                          {transaction.createdAt.split(' ')[0]}
                                      </td>
                                  </tr>
                              )
                          )
                        : null}
                </tbody>
            )}
        </TableContainer>
    )
}

export default Table
