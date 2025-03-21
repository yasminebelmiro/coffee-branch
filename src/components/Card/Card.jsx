import React from "react";
import {
  CardContainer,
  Description,
  PriceContainer,
  Column,
  ProductImage,
  ProductName,
  ProductPrice,
  Row,
  Icon,
  IconContainer,
  ImageContainer,
} from "./style";
import { TbShoppingCartPlus } from "react-icons/tb";

const Card = ({ name, type, size, price, image, ingredients, description }) => {
  return (
    <CardContainer>
      <CardContainer>
        <Row>
          <Column style={{ maxWidth: "120px" }}>
            <ProductName>{name}</ProductName>
            <Row style={{ padding: "0" }}>
              <Description>{type}</Description>
              <Description>{size}</Description>
            </Row>
          </Column>
          <IconContainer>
            <Icon as={TbShoppingCartPlus} />
          </IconContainer>
        </Row>
      </CardContainer>
      <ImageContainer>
        <PriceContainer>
          <ProductPrice>R${price.toFixed(2)}</ProductPrice>
        </PriceContainer>
        <ProductImage src={image} alt={name} />
      </ImageContainer>
    </CardContainer>
  );
};

export default Card;
