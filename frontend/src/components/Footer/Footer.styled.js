import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding-top: ${(p) => p.theme.space(18)};
  padding-bottom: ${(p) => p.theme.space(24)};

  background: url(images/pink-smile.svg) no-repeat top 40% left 2%,
    url(images/green-smile.svg) no-repeat top 0% right 10%,
    url(images/yellow-smile-1.svg) no-repeat top 70% right -3%,
    ${(p) => p.theme.colors.footerBg};
  border-top: ${(p) => p.theme.borders.footer};

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-top: ${(p) => p.theme.space(15)};
    padding-bottom: ${(p) => p.theme.space(15)};
    background: url(images/pink-smile.svg) no-repeat top 15% left -10%,
      url(images/green-smile.svg) no-repeat top 0% right 10%,
      ${(p) => p.theme.colors.footerBg};
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding-top: ${(p) => p.theme.space(10)};
    padding-bottom: ${(p) => p.theme.space(10)};
    background: url(images/pink-smile.svg) no-repeat top 15% left -10% /150px,
      url(images/green-smile.svg) no-repeat top 0% right 10%,
      ${(p) => p.theme.colors.footerBg};
  }
`;

export const Box = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space(2)};
  margin-left: ${(p) => p.theme.space(45)};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    justify-content: center;
    margin-left: 0;
  }
`;
