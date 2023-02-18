import styled from "styled-components";

export const Link = styled.a`
  display: inline-block;
  padding: 8px;
  color: #696969;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 200ms, color 200ms;

  :hover {
    color: #ffffff;
    background-color: #fad34f;
  }
`;
