import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-top: 2.5rem;
`
interface CardProps {
    backgroundCard?: boolean
}
export const Card = styled.div<CardProps>`
    background: ${(props) =>
        props.backgroundCard
            ? props.theme.colors.green700
            : props.theme.colors.gray600};
    flex: 1;
    padding: 1.25rem;
    border-radius: ${(props) => props.theme.borderRadius.roundedMd};

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    footer {
        font-size: ${(props) => props.theme.fontSizes.text4xl};
        color: ${(props) => props.theme.colors.white};
        padding-top: 0.625rem;
    }
`
