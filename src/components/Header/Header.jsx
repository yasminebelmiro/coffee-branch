import React from "react";
import { LuUserRound } from "react-icons/lu";
import { TbShoppingCart } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { HeaderContainer, Item, Items, Icon, Title } from "./style";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Item>
        <Title>Coffee Branch</Title>
      </Item>
      <Items>
        <Link to="/search">
          <Icon as={FiSearch} />
        </Link>
        <Item>
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
