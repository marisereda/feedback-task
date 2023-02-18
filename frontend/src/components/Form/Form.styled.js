import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 564px;

  @media (max-width: 640px) {
    max-width: none;
    text-align: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;
