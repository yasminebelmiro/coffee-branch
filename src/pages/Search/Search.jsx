import React, { useState } from "react";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import { data } from "../../service/data";

import Card from "../../components/Card/Card";
import { Grid, ProductListContainer } from "../../components/ProductList/style";

const Search = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = data.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );


  return (
    <>
      <HeaderSearch value={search} onChange={setSearch} />

      <ProductListContainer>
        {filteredProducts.length > 0 ? (
          <Grid>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                type={product.type}
                size={product.size}
                price={product.price}
                image={product.image}
                ingredients={product.ingredients}
                description={product.description}
              />
            ))}
          </Grid>
        ) : (
          search && <p>Nenhum produto encontrado</p>
        )}
      </ProductListContainer>
    </>
  );
};

export default Search;
