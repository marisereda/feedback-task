import styled from "styled-components";

export const Section = styled.section`
  padding-top: ${(p) => p.theme.space(44)};
  padding-bottom: ${(p) => p.theme.space(44)};

  background: url(images/yellow-smile-1.svg) no-repeat top 3% left 3%,
    url(images/yellow-smile-2.svg) no-repeat top 65% right 42%,
    url(images/pink-smile.svg) no-repeat top 88% right 33%,
    url(images/cloud-5.svg) no-repeat top 25% left -5% / 246px,
    url(images/cloud-15.svg) no-repeat top 52% left -7% / 218px,
    url(images/cloud-10.svg) no-repeat top 83% left 7% / 132px,
    url(images/cloud-15.svg) no-repeat top 82% left 28% / 218px,
    url(images/cloud-5.svg) no-repeat top 107% left 13% / 288px,
    url(images/cloud-5.svg) no-repeat top 16% right 51% / 138px,
    url(images/cloud-15.svg) no-repeat top 13% right 35% / 218px,
    url(images/cloud-10.svg) no-repeat top 31% right 45% / 172px,
    url(images/cloud-10.svg) no-repeat top 93% right 43% / 170px,
    url(images/circle.svg) no-repeat top 2% right 46%,
    url(images/map.jpg) no-repeat top 0% right 0%;

  @media (max-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding-top: ${(p) => p.theme.space(30)};
    padding-bottom: ${(p) => p.theme.space(30)};
    background: url(images/yellow-smile-1.svg) no-repeat top 3% left 3%,
      url(images/cloud-5.svg) no-repeat top 25% left -5% / 246px,
      url(images/cloud-15.svg) no-repeat top 52% left -7% / 218px,
      url(images/cloud-10.svg) no-repeat top 83% left 7% / 132px,
      url(images/cloud-15.svg) no-repeat top 82% left 28% / 218px,
      url(images/cloud-5.svg) no-repeat top 107% left 13% / 288px,
      url(images/map.jpg) no-repeat top 0% right 0%;
  }

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding-top: ${(p) => p.theme.space(15)};
    padding-bottom: ${(p) => p.theme.space(15)};
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.2) 100%
      ),
      url(images/map.jpg) no-repeat top 0% right 0% / 500px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: ${(p) => p.theme.space(7.5)};
  font-size: ${(p) => p.theme.fontSizes.heading};
  line-height: 1.3;
  color: ${(p) => p.theme.colors.heading};

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    font-size: ${(p) => p.theme.fontSizes.headingMobile};
    text-align: center;
  }
`;
