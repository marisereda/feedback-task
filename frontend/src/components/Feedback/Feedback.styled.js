import styled from "styled-components";

export const Section = styled.section`
  padding: 180px 0 174px;
  background: url(../../src/assets/images/yellow-smile-1.svg) no-repeat top 3%
      left 3%,
    url(../../src/assets/images/yellow-smile-2.svg) no-repeat top 65% right 42%,
    url(../../src/assets/images/pink-smile.svg) no-repeat top 88% right 33%,
    url(../../src/assets/images/cloud-5.svg) no-repeat top 25% left -5% / 246px,
    url(../../src/assets/images/cloud-15.svg) no-repeat top 52% left -7% / 218px,
    url(../../src/assets/images/cloud-10.svg) no-repeat top 83% left 7% / 132px,
    url(../../src/assets/images/cloud-15.svg) no-repeat top 82% left 28% / 218px,
    url(../../src/assets/images/cloud-5.svg) no-repeat top 107% left 13% / 288px,
    url(../../src/assets/images/cloud-5.svg) no-repeat top 16% right 51% / 138px,
    url(../../src/assets/images/cloud-15.svg) no-repeat top 13% right 35% /
      218px,
    url(../../src/assets/images/cloud-10.svg) no-repeat top 31% right 45% /
      172px,
    url(../../src/assets/images/cloud-10.svg) no-repeat top 93% right 43% /
      170px,
    url(../../src/assets/images/circle.svg) no-repeat top 2% right 46%,
    url(../../src/assets/images/map.jpg) no-repeat top 0% right 0%;

  @media (max-width: 1024px) {
    padding: 120px 0;
    background: url(../../src/assets/images/yellow-smile-1.svg) no-repeat top 3%
        left 3%,
      url(../../src/assets/images/cloud-5.svg) no-repeat top 25% left -5% / 246px,
      url(../../src/assets/images/cloud-15.svg) no-repeat top 52% left -7% / 218px,
      url(../../src/assets/images/cloud-10.svg) no-repeat top 83% left 7% /
        132px,
      url(../../src/assets/images/cloud-15.svg) no-repeat top 82% left 28% /
        218px,
      url(../../src/assets/images/cloud-5.svg) no-repeat top 107% left 13% /
        288px,
      url(../../src/assets/images/map.jpg) no-repeat top 0% right 0%;
  }

  @media (max-width: 640px) {
    padding: 60px 0;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.2) 100%
      ),
      url(../../src/assets/images/map.jpg) no-repeat top 0% right 0% / 500px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 40px;
  line-height: 1.3;
  color: #3e3e3e;

  @media (max-width: 640px) {
    font-size: 36px;
    text-align: center;
  }
`;
