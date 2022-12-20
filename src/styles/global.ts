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
  a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray300}
  }
  ul{
    list-style: none;
  }
  .container{
    max-width: ${(props) => props.theme.container.lg};
    margin: 0 auto;
    padding: 0 1.25rem;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
  input {
        flex: 1;
        height: 2.75rem;
        padding: 1.25rem;
        background-color: ${(props) => props.theme.colors.gray800};
        border: 2px solid ${(props) => props.theme.colors.gray800};
        border-radius: ${(props) => props.theme.borderRadius.roundedMd};
        color: ${(props) => props.theme.colors.white};

        transition: ${(props) => props.theme.transitions.all};
    }

    .loader { 
      position:relative;
      
    }
    .loader:before {
      content:'';
      background-color: ${(props) => props.theme.colors.green700};
      position:absolute;
      top:0px; 
      right: 0px; 
      /* bottom: 0px;  */
      left: 0px;
      height: 3px;
    }
    .loader:after { 
      content:'';
      position:absolute;
      border-radius:10px;
      z-index: 999;
      top:0px;
      right:100%;
      bottom:0;
      left:0;
      background-color: ${(props) => props.theme.colors.green300};
      width:0;
      animation:borealisBar 2s linear infinite;
      height: 3px;
    }

    @keyframes borealisBar {
      0% {
        left:0%;
        right:100%;
        width:0%;
      }
      10% {
        left:0%;
        right:75%;
        width:25%;
      }
      90% {
        right:0%;
        left:75%;
        width:25%;
      }
      100% {
        left:100%;
        right:0%;
        width:0%;
      }
    }
  
`
