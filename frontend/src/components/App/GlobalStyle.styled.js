import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: 'Apercu Arabic Pro', sans-serif ;
  }

  textarea {
    resize: none;
  }
`;
