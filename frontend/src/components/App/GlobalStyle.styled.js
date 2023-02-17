import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: 'Apercu Arabic Pro', sans-serif ;
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
