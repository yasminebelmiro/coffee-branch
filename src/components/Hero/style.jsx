import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background-color: #469299;
`;

export const HeroTitle = styled.h1`
  font-family: "Holtwood One SC", serif;
  font-size: 2rem;
  color: #fff;
`;

export const Image = styled.img`
  width: 70%;
`;

export const ProductsContainer = styled.div`
  width: 30%;
  text-align: right;
    padding-right: 2rem;
`;
export const TitleContainer = styled.div`
  width: 20%;

  text-align: left;
`;
export const ImageContainer = styled.div`
  width: 40%;
  justify-content: end;
  display: flex;
`;
export const ProductTitle = styled.h3`
  font-family: "Mansalva", sans-serif;
  font-size: 2.5rem;
  color: #000;
`;

export const GreenStrong = styled.strong`
  color: #c9da4a;
`;

export const BrownStrong = styled.strong`
  color: #614209;
`;

export const Description = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  color: #fff;
  font-size: 1.3rem;

  font-weight: 400;
`;
