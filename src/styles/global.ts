import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.green500};
  }
  body {
   background-color: ${(props) => props.theme.colors.gray900};
   color: ${(props) => props.theme.colors.gray300};
   -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.textBase};
  }
  .container{
    max-width: ${(props) => props.theme.container.lg};
    margin: 0 auto;
    padding: 0 1.25rem;
  }
`
