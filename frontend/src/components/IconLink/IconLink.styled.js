import styled from "styled-components";

export const Link = styled.a`
  display: inline-block;
  padding: 8px;
  border-radius: 9999px;
  color: #696969;
  cursor: pointer;

  transition: background-color 200ms, color 200ms;

  :hover {
    background-color: #fad34f;
    color: #ffffff;
  }
`;
