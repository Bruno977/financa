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
        max-width: 500px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.white};
    }
`
