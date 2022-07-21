import { createGlobalStyle } from "styled-components";

import bgImg from "../assets/bg.png";
export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', serif;
    background-color: ${({ theme}) => theme.colors.WHITE};
    /* background: url(${bgImg});
    background-repeat: no-repeat;
    background-size: cover; */
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
`;
