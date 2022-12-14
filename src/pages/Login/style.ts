import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.25rem;

    height: calc(100vh - 5rem);
`

export const Description = styled.div`
    p {
        padding: 1.5rem 0;
        &:first-of-type {
            font-size: ${(props) => props.theme.fontSizes.text2xl};
            font-weight: bold;
            color: ${(props) => props.theme.colors.white};
        }
        &:last-of-type {
            font-size: ${(props) => props.theme.fontSizes.textLg};
            color: ${(props) => props.theme.colors.white};
        }
    }
    h1 {
        color: ${(props) => props.theme.colors.white};
        font-size: 4rem;
        font-weight: 900;
        span {
            color: ${(props) => props.theme.colors.blue};
        }
    }
    button {
        background-color: ${(props) => props.theme.colors.yellow500};
        border: 1px solid ${(props) => props.theme.colors.yellow500};
        color: ${(props) => props.theme.colors.gray900};
        border-radius: ${(props) => props.theme.borderRadius.roundedFull};
        padding: 0.875rem 2rem;
        font-weight: bold;
        font-size: ${(props) => props.theme.fontSizes.textLg};
        cursor: pointer;
        transition: ${(props) => props.theme.transitions.all};

        &:hover {
            background-color: transparent;
            color: ${(props) => props.theme.colors.yellow500};
        }
    }
`

export const ImageContainer = styled.div`
    img {
        max-width: 550px;
    }
`
