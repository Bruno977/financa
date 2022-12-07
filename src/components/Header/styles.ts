import styled from 'styled-components'

export const HeaderContainer = styled.header`
    border-bottom: 1px solid ${(props) => props.theme.colors.gray700};

    nav ul,
    nav {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }
    nav ul {
        margin-left: 5rem;
    }
    .active {
        color: ${(props) => props.theme.colors.white};
        font-weight: bold;
    }
`

export const ContainerNavigation = styled.div`
    max-width: ${(props) => props.theme.container.xl};
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing[5]};

    display: flex;
    align-items: center;
    justify-content: space-between;
`
interface ButtonProps {
    logged?: boolean
}

export const ButtonSignIn = styled.button<ButtonProps>`
    background-color: ${(props) => props.theme.colors.gray700};
    padding: 0.625rem 1.25rem;
    border: none;
    cursor: pointer;
    border-radius: ${(props) => props.theme.borderRadius.roundedMd};

    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing[5]};

    color: ${(props) => props.theme.colors.white};

    transition: ${(props) => props.theme.transitions.all};

    svg {
        fill: ${(props) =>
            props.logged
                ? props.theme.colors.green300
                : props.theme.colors.yellow500};
    }

    &:hover {
        color: ${(props) =>
            props.logged
                ? props.theme.colors.green300
                : props.theme.colors.yellow500};
    }
`

export const Avatar = styled.img`
    max-width: 25px;
    max-height: 25px;
    border-radius: ${(props) => props.theme.borderRadius.roundedFull};
`
