import React, { useEffect, useState } from "react";

import { HomeContainer } from "./style";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";

import { data } from "../../service/data";
import ProductList from "../../components/ProductList/ProductList";
import Header from "../../components/Header/Header";

const Home = () => {
  const [drinks, setDrinks] = useState([]);
  const [sweet, setSweet] = useState([]);
  const [salty, setSalty] = useState([]);

  useEffect(() => {
    setSweet(data.filter((item) => item.type == "Bebida"));
    setSalty(data.filter((item) => item.type == "Doce"));
    setDrinks(data.filter((item) => item.type == "Salgado"));
  }, []);

  return (
    <HomeContainer>
      <Header/>
      <Hero />
      <Category />
      <ProductList product={drinks} title="Bebidas" />
      <ProductList product={sweet} title="Doces" />
      <ProductList product={salty} title="Salgados" />
    </HomeContainer>
  );
};

export default Home;
