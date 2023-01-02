import React from 'react'
import {
    FaDollarSign,
    FaRegArrowAltCircleDown,
    FaRegArrowAltCircleUp,
} from 'react-icons/fa'
import { useSummary } from '../../hooks/useSummary'
import { moneyFormatter } from '../../utils/Formatted'

import { Card, Container } from './styles'

function Summary() {
    const { income, outcome, total } = useSummary()
    return (
        <Container>
            <Card>
                <header>
                    <span>Entradas</span>
                    <FaRegArrowAltCircleUp size={24} color="#00B37E" />
                </header>
                <footer>{moneyFormatter.format(income)}</footer>
            </Card>
            <Card>
                <header>
                    <span>Saídas</span>
                    <FaRegArrowAltCircleDown size={24} color="#F75A68" />
                </header>
                <footer>{moneyFormatter.format(outcome)}</footer>
            </Card>
            <Card backgroundCard>
                <header>
                    <span>Total</span>
                    <FaDollarSign size={24} color="#fff" />
                </header>
                <footer>{moneyFormatter.format(total)}</footer>
            </Card>
        </Container>
    )
}

export default Summary
