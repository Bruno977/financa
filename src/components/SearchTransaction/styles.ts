import styled from 'styled-components'

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    padding-top: 3rem;
    padding-bottom: 1.25rem;

    input {
        flex: 1;
        height: 2.75rem;
        padding: 1.25rem;
        background-color: ${(props) => props.theme.colors.gray800};
        border: 2px solid ${(props) => props.theme.colors.gray800};
        border-radius: ${(props) => props.theme.borderRadius.roundedMd};
        color: ${(props) => props.theme.colors.white};
    }

    button {
        background-color: transparent;
        height: 2.75rem;
        color: ${(props) => props.theme.colors.green300};
        padding: 0 1.25rem;
        border-radius: ${(props) => props.theme.borderRadius.roundedMd};
        border: 2px solid ${(props) => props.theme.colors.green500};
        cursor: pointer;
        transition: ${(props) => props.theme.transitions.all};

        display: flex;
        align-items: center;
        gap: 0.625rem;

        &:hover {
            background-color: ${(props) => props.theme.colors.green500};
            color: ${(props) => props.theme.colors.white};
        }
    }
`
