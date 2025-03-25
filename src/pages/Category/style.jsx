import styled from "styled-components";

export const CardsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
  align-items: center;
  background: #424630;
  padding: 0 200px;
`;

export const Image = styled.img`
  width: 24%;
  height: 250px;
  object-fit: cover;
  border-radius: 0 50px 0 50px;
`;

export const Title = styled.h1`
  width: 54%;
  color: #fff;
  font-family: "Holtwood One SC", serif;
`;

export const Subtitle = styled.h2`
  width: 54%;
  color: #fff;
  font-family: "Barlow Condensed", sans-serif;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 2rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
