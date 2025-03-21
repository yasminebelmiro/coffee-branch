import React from "react";
import { HeaderSearchContainer, CloseButton, SearchInput } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderSearch = ({ value, onChange }) => {
  const navigate = useNavigate();
  return (
    <HeaderSearchContainer>
      <SearchInput
        type="text"
        placeholder="Pesquise em Coffee Branch"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <CloseButton onClick={() => navigate(-1)}>Fechar</CloseButton>
    </HeaderSearchContainer>
  );
};

export default HeaderSearch;
