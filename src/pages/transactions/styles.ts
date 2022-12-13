import styled from 'styled-components'

export const Container = styled.section`
    padding: 1.5rem 0;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h1 {
        font-size: ${(props) => props.theme.fontSizes.text2xl};
        color: ${(props) => props.theme.colors.white};
    }
`
