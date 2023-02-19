import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${(p) => `${p.theme.space(7.5)} ${p.theme.space(11.5)}`};

  font-size: ${(p) => p.theme.fontSizes.input};
  line-height: 1.8;
  color: ${(p) => p.theme.colors.input};
  background-color: ${(p) => p.theme.colors.white};
  border: ${(p) => p.theme.borders.input};
  border-radius: ${(p) => p.theme.radii.input};
  outline: none;

  :focus {
    border-color: ${(p) => p.theme.colors.accent};
  }
  :not(:placeholder-shown):invalid {
    border-color: ${(p) => p.theme.colors.error};
  }
  ::placeholder {
    color: ${(p) => p.theme.colors.placeholder};
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding: ${(p) => p.theme.space(6.5)};
  }
`;

export const Label = styled.label`
  display: block;
`;
