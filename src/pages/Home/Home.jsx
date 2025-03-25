import React, { useEffect, useState } from "react";

import { HomeContainer, Separator, SeparatorTitle, Grid } from "./style";
import Hero from "../../components/Hero/Hero";
import { data } from "../../service/data";
import Header from "../../components/Header/Header";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Card from "../../components/Card/Card";

const Home = () => {
  const [drinks, setDrinks] = useState([]);
  const [sweet, setSweet] = useState([]);
  const [salty, setSalty] = useState([]);

  useEffect(() => {
    setSweet(data.filter((item) => item.type == "bebida"));
    setSalty(data.filter((item) => item.type == "doce"));
    setDrinks(data.filter((item) => item.type == "salgado"));
  }, []);

  return (
    <HomeContainer>
      <Header />
      <Hero />
      <CategoryCard />
      <Separator>
        <SeparatorTitle>Bebidas</SeparatorTitle>
      </Separator>
      <Grid>
        {drinks.map((item) => (
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
      <Separator>
        <SeparatorTitle>Doces</SeparatorTitle>
      </Separator>
      <Grid>
        {sweet.map((item) => (
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
      <Separator>
        <SeparatorTitle>Salgados</SeparatorTitle>
      </Separator>
      <Grid>
        {salty.map((item) => (
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
    </HomeContainer>
  );
};

export default Home;
