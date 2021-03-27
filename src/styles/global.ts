import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background-color: #b4efb1;
    font-family: 'Poppins', sans-serif;
  }

  h2{
    margin-top: 3.2rem;
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme.colors.colorblack};

    font-weight: normal;
  }

`

export default GlobalStyles
