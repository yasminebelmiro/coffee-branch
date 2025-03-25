import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
`;

export const Separator = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export const SeparatorTitle = styled.h1`
  padding-left: 2rem;
  font-size: 1rem;
  font-family: "Major Mono Display", monospace;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap:1rem;
   padding: 2rem;
`;


       