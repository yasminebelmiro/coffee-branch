import styled from "styled-components";

export const CategoryContainer = styled.section`
  width: 100%;
  display: flex;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.a`
  width: 34%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  color: #fff;
  font-size: 2rem;

  font-weight: 400;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 500px;
   width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
