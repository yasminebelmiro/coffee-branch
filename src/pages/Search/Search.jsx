import React, { useState } from "react";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import { data } from "../../service/data";

import Card from "../../components/Card/Card";
import { SearchContainer, Grid, Separator, SeparatorTitle } from "./style.jsx";

const Search = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = data.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      <HeaderSearch value={search} onChange={setSearch} />

      <SearchContainer>
        {filteredProducts.length > 0 ? (
          <>
            {search.length != 0 ? (
              <Separator>
                <SeparatorTitle style={{ fontFamily: "Barlow Condensed" }}>
                  Resultado para {search}{" "}
                </SeparatorTitle>
              </Separator>
            ) : (
              <></>
            )}
            <Grid>
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
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
          </>
        ) : (
          search && (
            <Separator>
              <SeparatorTitle style={{ fontFamily: "Barlow Condensed" }}>
                Não há resultado para {search}
              </SeparatorTitle>
            </Separator>
          )
        )}
      </SearchContainer>
    </>
  );
};

export default Search;
