import React from "react";
import { LuUserRound } from "react-icons/lu";
import { TbShoppingCart } from "react-icons/tb";
import {  useNavigate } from "react-router-dom";
import { HeaderContainer, Item, Items, Icon, Title } from "./style";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Item to="/" >
        <Title>Coffee Branch</Title>
      </Item>
      <Items>
        <Item to="/search">
          <Icon as={FiSearch} />
        </Item >
        <Item to="/login" >
          <Icon as={LuUserRound} />
        </Item>
        <Item>
          <Icon as={TbShoppingCart} />
        </Item>
      </Items>
    </HeaderContainer>
  );
};

export default Header;
