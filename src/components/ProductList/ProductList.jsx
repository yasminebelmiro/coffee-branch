import React, { useState } from "react";
import { Grid, ProductListContainer, Separator, SeparatorTitle } from "./style";
import Card from "../Card/Card";
import { data } from "../../service/data";

const ProductList = ({ product, title }) => {

  return (
    <ProductListContainer>
      <Separator>
        <SeparatorTitle>{title}</SeparatorTitle>
      </Separator>
      <Grid>
        {product.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            type={item.type}
            size={item.size}
            image={item.image}
            price={item.price}
            ingredients={item.ingredients}
            description={item.description}
          />
        ))}
      </Grid>
    </ProductListContainer>
  );
};

export default ProductList;
