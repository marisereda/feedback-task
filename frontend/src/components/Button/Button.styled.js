import styled, { keyframes } from "styled-components";
import { ImSpinner9 } from "react-icons/im";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  min-width: ${(p) => p.theme.sizes.button};
  padding: ${(p) => `${p.theme.space(7)} ${p.theme.space(13)}`};

  font-size: ${(p) => p.theme.fontSizes.button};
  line-height: 1;
  color: ${(p) => p.theme.colors.white};

  background-color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.full};
  border: none;
  box-shadow: none;
  cursor: pointer;

  transform: translateY(0);
  transition: transform ${(p) => p.theme.animation.default},
    box-shadow ${(p) => p.theme.animation.default};

  :hover {
    box-shadow: ${(p) => p.theme.shadows.button};
    transform: translateY(-1px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }

  :disabled {
    box-shadow: none;
    opacity: 0.8;
    transform: translateY(0);
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    width: 100%;
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
