import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: ${(p) => p.theme.sizes.form};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    max-width: none;
    text-align: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space(2)};
  margin-bottom: ${(p) => p.theme.space(6)};
`;
