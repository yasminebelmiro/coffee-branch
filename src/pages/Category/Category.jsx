import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../service/data";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";

import {
  Grid,
  Image,
  Title,
  TitleContainer,
  CardsContainer,
  Column,
  Subtitle,
} from "./style";
const Category = () => {
  const { categoryName } = useParams();

  const filteredProducts = data.filter((item) => item.type == categoryName);

  console.log(categoryName);

  return (
    <div>
      <Header />
      {categoryName === "bebida" ? (
        <TitleContainer>
          <Column>
            <Title>Bebidas</Title>
            <Subtitle>
              Gelado ou quentinho, doce ou intenso… Aqui tem a bebida perfeita
              para você!
            </Subtitle>
          </Column>
          <Image
            src="https://i.pinimg.com/736x/44/91/f3/4491f38d30d81d22906ecc6b5caaab77.jpg"
            alt=""
          />
        </TitleContainer>
      ) : categoryName === "doce" ? (
        <TitleContainer>
          <Column>
            <Title>Doces</Title>
            <Subtitle>
              Feitos com carinho, nossos doces são pura tentação. Difícil vai
              ser escolher só um!
            </Subtitle>
          </Column>
          <Image
            src="https://i.pinimg.com/736x/5f/f7/75/5ff775239c8b22222bad993ca30fd925.jpg"
            alt=""
          />
        </TitleContainer>
      ) : (
        <TitleContainer>
          <Column>
            <Title>Salgados</Title>
            <Subtitle>
              Crocrante, recheado e delicioso! Experimente nossos salgados e
              descubra o sabor perfeito para qualquer hora.
            </Subtitle>
          </Column>
          <Image
            src="https://i.pinimg.com/736x/28/0e/07/280e074ded25288af6d7a90fb05aa254.jpg"
            alt="Salgados"
          />
        </TitleContainer>
      )}
      <CardsContainer>
        <Grid>
          {filteredProducts.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
              size={item.size}
              price={item.price}
              image={item.image}
              ingredients={item.ingredients}
              description={item.description}
            />
          ))}
        </Grid>
      </CardsContainer>
    </div>
  );
};

export default Category;
