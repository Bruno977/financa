import styled from 'styled-components'
import Modal from 'react-modal'

export const ReactModal = styled(Modal)`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);

    .modal-content {
        border-radius: ${(props) => props.theme.borderRadius.roundedMd};
        max-width: 400px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.gray800};
        padding: 1.25rem 2.5rem;
        position: relative;

        .close-modal {
            position: absolute;
            top: 1.25rem;
            right: 1.25rem;
            cursor: pointer;
        }

        h4 {
            color: ${(props) => props.theme.colors.white};
            padding-bottom: 1.25rem;
            font-weight: bold;
            font-size: ${(props) => props.theme.fontSizes.text2xl};
        }
        input {
            background: ${(props) => props.theme.colors.gray900};
            display: block;
            width: 100%;
            margin: 1rem 0;
            height: 3rem;
            border-color: ${(props) => props.theme.colors.gray900};
        }
        button[type='submit'] {
            width: 100%;
            margin-top: 2rem;
            background: ${(props) => props.theme.colors.green500};
            border: 1px solid ${(props) => props.theme.colors.green500};
            color: ${(props) => props.theme.colors.white};
            padding: 0.625rem 1.25rem;
            border-radius: ${(props) => props.theme.borderRadius.roundedMd};
            cursor: pointer;
            transition: ${(props) => props.theme.transitions.all};

            &:hover {
                background: transparent;
                color: ${(props) => props.theme.colors.green300};
            }
        }
    }
`
export const TransactionTypeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
`
interface ButtonTransactionProps {
    isActive: boolean
    activeColor: 'green' | 'red'
}
const colors = {
    green: '#015F43',
    red: '#AA2834',
}

export const ButtonTransaction = styled.button<ButtonTransactionProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 0.625rem;
    flex: 1;
    height: 3rem;
    background-color: ${({ isActive, activeColor }) =>
        isActive ? colors[activeColor] : '#29292E'};
    border: 2px solid
        ${({ isActive, activeColor }) =>
            isActive ? colors[activeColor] : '#29292E'};

    border-radius: ${(props) => props.theme.borderRadius.roundedMd};
    color: ${(props) => props.theme.colors.white};

    transition: ${(props) => props.theme.transitions.all};

    svg {
        fill: ${({ isActive, activeColor }) =>
            !isActive && colors[activeColor]};
    }
`
