import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Category from "../pages/Category/Category";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import { PrivateRoutes } from ".";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />
        <Route path="/categoria/:categoryName" element={<Category />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
