import React, { useEffect, useState } from "react";
import {
  CardContainer,
  Description,
  Bottom,
  Column,
  ProductImage,
  ProductName,
  ProductPrice,
  Row,
  Icon,
  IconContainer,
  ImageContainer,
  Modal,
  Overlay,
  CloseButton,
  RowModal,
  ProductNameModal,
  DescriptionModal,
  ProductImageModal,
  BuyButton,
} from "./style";
import { TbShoppingCartPlus } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const Card = ({
  id,
  name,
  type,
  size,
  price,
  image,
  description,
  ingredients,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <CardContainer onClick={() => setIsOpen(true)}>
        <Row>
          <Column>
            <ProductName>{name}</ProductName>
            <Description>{type}</Description>
            <Description>{size}</Description>
          </Column>
          <ProductPrice>R${price.toFixed(2)}</ProductPrice>
        </Row>

        <ImageContainer>
          <Bottom>
            <IconContainer>
              <Icon as={TbShoppingCartPlus} />
            </IconContainer>
          </Bottom>
          <ProductImage src={image} alt={name} />
        </ImageContainer>
      </CardContainer>

      {isOpen && (
        <Overlay>
          <Modal>
            <RowModal>
              <ProductNameModal>{name}</ProductNameModal>
              <CloseButton onClick={() => setIsOpen(false)}>
                <IoMdCloseCircle />
              </CloseButton>
            </RowModal>
            <Row style={{ padding: "5px 0" }}>
              <Description>{type}</Description>
              <Description>{size}</Description>
            </Row>

            <ProductImageModal src={image} alt={name} />

            <DescriptionModal>{description}</DescriptionModal>
            <DescriptionModal>
              <strong>Ingrediente: </strong>
              {ingredients}
            </DescriptionModal>
            <ProductPrice>R${price.toFixed(2)}</ProductPrice>
            <BuyButton>Adicionar ao carrinho</BuyButton>
          </Modal>
        </Overlay>
      )}
    </>
  );
};

export default Card;
