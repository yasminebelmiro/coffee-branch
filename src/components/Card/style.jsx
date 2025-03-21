import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  font-family: "Barlow Condensed", sans-serif;
  overflow: hidden;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 1rem;
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
  
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  background: #614209;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
`;

export const Icon = styled.div`
font-size: 1.5rem`;

export const ImageContainer = styled.div`
  width: 200px;
  position: relative;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ProductPrice = styled.p`
  margin: 0;
  font-size: 1.3rem;
  font-weight: bold;
`;
