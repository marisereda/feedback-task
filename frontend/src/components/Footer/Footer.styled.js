import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 72px 0 96px;
  background: url("../../src/assets/images/pink-smile.svg") no-repeat top 40%
      left 2%,
    url("../../src/assets/images/green-smile.svg") no-repeat top 0% right 10%,
    url("../../src/assets/images/yellow-smile-1.svg") no-repeat top 70% right -3%,
    #fafafa;
  border-top: 1px solid #d8d8d8;

  @media (max-width: 1024px) {
    padding: 60px 0;
    background: url("../../src/assets/images/pink-smile.svg") no-repeat top 15%
        left -10%,
      url("../../src/assets/images/green-smile.svg") no-repeat top 0% right 10%,
      #fafafa;
  }

  @media (max-width: 640px) {
    padding: 40px 0;
    background: url("../../src/assets/images/pink-smile.svg") no-repeat top 15%
        left -10% /150px,
      url("../../src/assets/images/green-smile.svg") no-repeat top 0% right 10%,
      #fafafa;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 180px;

  @media (max-width: 640px) {
    justify-content: center;
    margin-left: 0;
  }
`;
