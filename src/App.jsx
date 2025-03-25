import React from "react";

import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";


const product = {
  id: 1,
  name: "Café Espresso",
  price: "R$ 8,00",
  image: "https://source.unsplash.com/200x200/?coffee",
  description: "Um café espresso encorpado e aromático.",
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categoria/:categoryName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
