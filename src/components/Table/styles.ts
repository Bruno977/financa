import styled from 'styled-components'

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    td,
    th {
        padding: 1rem;
    }
    thead tr {
        th {
            background: ${(props) => props.theme.colors.gray600};
            text-align: left;
            color: ${(props) => props.theme.colors.white};

            &:first-of-type {
                border-top-left-radius: ${(props) =>
                    props.theme.borderRadius.roundedMd};
                width: 50%;
            }
            &:last-of-type {
                border-top-right-radius: ${(props) =>
                    props.theme.borderRadius.roundedMd};
            }
        }
    }
    tbody tr {
        background: ${(props) => props.theme.colors.gray700};
        margin-top: 0.5rem;
        td {
            border-top: 4px solid ${(props) => props.theme.colors.gray900};
        }
        td:last-of-type div {
            display: flex;
            align-items: center;
            gap: 1.25rem;
        }
    }
`

export const buttonActions = styled.button`
    border: none;
    line-height: 0;
    background-color: transparent;
    cursor: pointer;
`

export const EditTransaction = styled(buttonActions)`
    color: ${(props) => props.theme.colors.gray300};
`
export const RemoveTransaction = styled(buttonActions)`
    color: ${(props) => props.theme.colors.red500};
`
