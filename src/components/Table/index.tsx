import { ref, remove } from 'firebase/database'
import React, { useContext } from 'react'
import { FaPen, FaTimes } from 'react-icons/fa'
import { AuthContext } from '../../contexts/AuthContext'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { database } from '../../services/firebase'
import { moneyFormatter } from '../../utils/Formatted'
import { EditTransaction, RemoveTransaction, TableContainer } from './styles'
interface TableProps {
    loading: boolean
}

function Table({ loading }: TableProps) {
    const { user } = useContext(AuthContext)
    const { transactions } = useContext(TransactionsContext)

    async function handleRemoveTransaction(transactionId: string) {
        try {
            await remove(
                ref(
                    database,
                    `/users/${user?.id}/transactions/${transactionId}`
                )
            )
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <TableContainer className={loading ? 'loader' : ''}>
            <thead>
                <tr>
                    <th>Transação</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th>Ações</th>
                </tr>
            </thead>
            {loading ? (
                <tbody>
                    <tr>
                        <td colSpan={5} style={{ textAlign: 'center' }}>
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
                                      <td colSpan={5}>
                                          Nenhum dado encontrado
                                      </td>
                                  </tr>
                              ) : (
                                  <tr key={transaction.id}>
                                      <td>{transaction.description}</td>
                                      {transaction.type === 'income' ? (
                                          <td style={{ color: '#00B37E' }}>
                                              {moneyFormatter.format(
                                                  +transaction.price
                                              )}
                                          </td>
                                      ) : (
                                          <td style={{ color: '#F75A68' }}>
                                              -{' '}
                                              {moneyFormatter.format(
                                                  +transaction.price
                                              )}
                                          </td>
                                      )}
                                      <td>{transaction.category}</td>
                                      <td>
                                          {transaction.createdAt.split(' ')[0]}
                                      </td>
                                      <td>
                                          <div>
                                              {/* <EditTransaction type="button">
                                                  <FaPen size={20} />
                                              </EditTransaction> */}
                                              <RemoveTransaction
                                                  type="button"
                                                  onClick={() =>
                                                      handleRemoveTransaction(
                                                          transaction.id
                                                      )
                                                  }
                                              >
                                                  <FaTimes size={20} />
                                              </RemoveTransaction>
                                          </div>
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
