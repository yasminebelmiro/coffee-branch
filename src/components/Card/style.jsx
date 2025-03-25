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
  z-index: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 120px;
  justify-content: space-between;
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const Icon = styled.div`
  font-size: 1.5rem;
`;

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

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  max-height: 90%;
  text-align: center;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 30px;
`;

export const RowModal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductNameModal = styled.h1`
  text-align: left;
`;

export const DescriptionModal = styled.p`
  font-size: 1.1rem;
  color: #000;
  text-align: left;
  padding: 0.4rem 0;
`;

export const ProductImageModal = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
    border-radius: 10px;
`;

export const BuyButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.2rem;
  background-color: #805731;
  color: #fff;
  padding: 0.6rem;
  width: 100%;
  border-radius: 20px;
  margin: 1rem 0;
`;
