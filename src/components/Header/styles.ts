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

export const ButtonSignIn = styled.button`
    background-color: ${(props) => props.theme.colors.gray700};
    padding: 0.625rem 1.25rem;
    border: none;
    cursor: pointer;
    border-radius: ${(props) => props.theme.borderRadius.roundedMd};

    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing[5]};

    color: ${(props) => props.theme.colors.white};
`

export const Avatar = styled.img`
    max-width: 25px;
    max-height: 25px;
    border-radius: ${(props) => props.theme.borderRadius.roundedFull};
`
