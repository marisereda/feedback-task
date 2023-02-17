import styled, { keyframes } from "styled-components";
import { ImSpinner9 } from "react-icons/im";
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1em;
  min-width: 218px;
  padding: 28px 52px;
  font-family: "Apercu Arabic Pro";
  font-size: 18px;
  line-height: 1;
  color: white;
  background-color: #fad34f;
  border-radius: 500px;
  border: none;
  cursor: pointer;
  transition: transform 200ms, box-shadow 200ms;
  transform: translateY(0);
  box-shadow: none;

  :hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
  :active {
    transform: translateY(0);
    box-shadow: none;
  }

  :disabled {
    transform: translateY(0);
    box-shadow: none;
    opacity: 0.8;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const Spinner = styled(ImSpinner9)`
  animation: ${rotate} 800ms linear infinite;
`;
