import styled from 'styled-components'

export const HeaderContainer = styled.header`
    border-bottom: 1px solid ${(props) => props.theme.colors.gray700};

    nav ul,
    nav {
        display: flex;
        align-items: center;
    }
`
export const ContainerNavigation = styled.div`
    max-width: ${(props) => props.theme.container.xl};
    margin: 0 auto;
    padding: ${(props) => props.theme.spacing[4]};

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ButtonSignIn = styled.button``
