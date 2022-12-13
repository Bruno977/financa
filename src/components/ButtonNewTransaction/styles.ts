import styled from 'styled-components'

export const Button = styled.button`
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
`
