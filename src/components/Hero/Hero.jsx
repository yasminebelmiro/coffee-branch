import React from "react";
import drinks from "../../assets/drinks.png";
import hero from "../../assets/hero2.png";
import {
  HeroSection,
  BrownStrong,
  Description,
  GreenStrong,
  HeroTitle,
  Image,
  ImageContainer,
  ProductTitle,
  ProductsContainer,
  TitleContainer,
} from "./style";

const Hero = () => {
  return (
    <>
      <HeroSection>
        <TitleContainer>
          <HeroTitle>
            Duas novas delícias para refrescar e encantar seu paladar!
          </HeroTitle>
        </TitleContainer>
        <ImageContainer>
          <Image src={drinks} alt="" />
        </ImageContainer>
        <ProductsContainer>
          <ProductTitle>
            <GreenStrong>Matcha</GreenStrong> Milk Tea
          </ProductTitle>
          <ProductTitle>
            <GreenStrong>R$ 35,00 </GreenStrong>
          </ProductTitle>
          <Description>
            O equilíbrio perfeito entre o sabor autêntico do chá verde matcha e
            a cremosidade do leite. Refrescante, saudável e irresistível!
          </Description>
          <ProductTitle>
            Iced <BrownStrong>Caramel</BrownStrong>
          </ProductTitle>
          <ProductTitle>
            <BrownStrong>R$ 20,00 </BrownStrong>
          </ProductTitle>
          <Description>
            Café gelado com um toque generoso de caramelo, equilibrando doçura e
            intensidade para um momento único de prazer.
          </Description>
        </ProductsContainer>
      </HeroSection>
      <HeroSection style={{ background: "#424630"}}>
        <TitleContainer style={{ width: "30%" }}>
          <HeroTitle style={{ fontSize: "1.9rem" }}>
            Experimente cafés artesanais e doces irresistíveis, preparados com
            carinho para tornar seu dia ainda mais especial.
          </HeroTitle>
        </TitleContainer>
        <ImageContainer style={{ width: "60%" }}>
          <Image src={hero} alt="" style={{ width: "50%" }} />
        </ImageContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
