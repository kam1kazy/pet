import { createGlobalStyle } from 'styled-components'
import { theme } from './_variable'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${theme.fontFamily}; 
    font-size: ${theme.fontSize};
    background-color: ${theme.backgroundColor};
    color: ${theme.color}; 
  }

  body {
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }

  main {
    position: relative;
    width: 30rem;
    height: 97vh;
    border: 0.25rem solid #fefefe;
    border-radius: 1.25rem;
    box-shadow: 0rem 0.75rem 2.5rem -0.25rem rgb(0 0 0 / 20%);
    overflow: hidden;

  }


  a {
    text-decoration: none;
    color: ${theme.color};
  }
`

export { GlobalStyle }
