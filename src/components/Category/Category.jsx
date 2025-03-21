import React from "react";
import { Card, CardTitle, CategoryContainer, Image, Overlay } from "./style";

const Category = () => {
  return (
    <CategoryContainer>
      <Card >
        <Image
          src="https://i.pinimg.com/736x/fd/13/eb/fd13eb260ccbb6ca530c6ca237110072.jpg"
          alt=""
        />
        <Overlay>
          <CardTitle>Bebidas</CardTitle>
        </Overlay>
      </Card>
      <Card >
        <Image
          src="https://i.pinimg.com/736x/50/df/6a/50df6a7fa81f0964c8a1cb81e8d81f45.jpg"
          alt=""
        />
        <Overlay>
          <CardTitle>Doces</CardTitle>
        </Overlay>
      </Card>
      <Card >
        <Image
          src="https://i.pinimg.com/736x/c4/22/81/c422816fa7e6bf5651e4be9d8ec2fe4a.jpg"
          alt=""
        />
        <Overlay>
          <CardTitle>Salgados</CardTitle>
        </Overlay>
      </Card>
    </CategoryContainer>
  );
};

export default Category;
