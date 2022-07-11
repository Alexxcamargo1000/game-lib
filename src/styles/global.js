import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 24px;
    font-family: 'Roboto', serif;
  }

  button {
    font-family: 'Roboto', serif;
  }

  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.GRAY};
  }
`