import React from 'react'
import { TableContainer } from './styles'

function Table() {
    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>Transação</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento</td>
                    <td>R$ 1200,00</td>
                    <td>Venda</td>
                    <td>19/04/1997</td>
                </tr>
                <tr>
                    <td>Teste</td>
                    <td>R$ 1200,00</td>
                    <td>Venda</td>
                    <td>19/04/1997</td>
                </tr>
            </tbody>
        </TableContainer>
    )
}

export default Table
