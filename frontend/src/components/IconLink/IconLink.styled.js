import styled from "styled-components";

export const Link = styled.a`
  display: inline-block;
  padding: ${(p) => p.theme.space(2)};
  color: ${(p) => p.theme.colors.link};
  border-radius: ${(p) => p.theme.radii.full};
  cursor: pointer;
  transition: background-color ${(p) => p.theme.animation.default},
    color ${(p) => p.theme.animation.default};

  :hover {
    color: ${(p) => p.theme.colors.white};
    background-color: ${(p) => p.theme.colors.accent};
  }
`;
