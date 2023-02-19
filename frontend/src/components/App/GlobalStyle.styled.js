import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(p) => p.theme.fonts.primary};
  }

  h1{
    margin: 0;
  }

  textarea {
    resize: none;
  }

  svg{
    display: block;
  }
`;
