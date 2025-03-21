import styled from "styled-components";

export const HeaderSearchContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  background-color: #fff;
  height: 4rem;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 4rem;
  border: none;
  color: #000;
  font-size: 1.6rem;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: bold;

  &::placeholder {
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;

export const CloseButton = styled.button`
  width: 10%;
  height: 3rem;
  border: none;
  border-left: 4px solid #000;
  background: transparent;
  cursor: pointer;
  font-size: 1.4rem;
  font-family: "Barlow Condensed", sans-serif;
`;
