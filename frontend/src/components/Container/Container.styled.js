import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(p) => p.theme.sizes.container};
  padding: ${(p) => `0 ${p.theme.space(7.5)}`};
  margin: 0 auto;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding: ${(p) => `0 ${p.theme.space(4)}`};
  }
`;
