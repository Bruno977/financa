import React from 'react'
import Summary from '../../components/Summary'
import Table from '../../components/Table'
import { Container } from './styles'

function Dashboard() {
    return (
        <Container>
            <h1>Dashboard</h1>
            <Summary />
            {/* <Chart /> */}
            <div style={{ marginTop: '1.25rem' }}>
                <Table loading={false} />
            </div>
        </Container>
    )
}

export default Dashboard
